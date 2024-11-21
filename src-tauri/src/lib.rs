mod categories;

use std::fs::OpenOptions;

use categories::get_categories;
use sqlx::sqlite::SqlitePoolOptions;
use sqlx::Sqlite;
use tauri::path::BaseDirectory;
use tauri::{App, Manager};
use tauri_plugin_fs::FsExt;

type Db = sqlx::Pool<Sqlite>;

#[derive(Debug)]
struct AppState {
    db: Db,
}

impl AppState {
    pub fn db(&self) -> &Db {
        &self.db
    }

    pub fn db_mut(&mut self) -> &mut Db {
        &mut self.db
    }
}

async fn setup_db(app: &App) -> Db {
    let mut path = app.path().app_data_dir().expect("could not get data_dir");
    if let Err(err) = std::fs::create_dir_all(path.clone()) {
        panic!("error creating directory {err}");
    };
    path.push("jikan.sqlite");

    let handle = OpenOptions::new().create_new(true).write(true).open(&path);
    if let Err(err) = handle {
        match err.kind() {
            std::io::ErrorKind::AlreadyExists => println!("database file already exists"),
            _ => panic!("error creating databse file {err}"),
        }
    };
    let db = SqlitePoolOptions::new().connect(path.to_str().unwrap()).await.unwrap();
    sqlx::migrate!("./migrations").run(&db).await.unwrap();

    db
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub async fn run() {
    let app = tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![get_categories])
        .build(tauri::generate_context!())
        .expect("error while running tauri application");

    let db = setup_db(&app).await;
    app.manage(AppState { db });
    app.run(|_, _| {});
}
