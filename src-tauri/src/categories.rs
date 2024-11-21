use serde::{Deserialize, Serialize};
use sqlx::prelude::FromRow;

use crate::AppState;

#[derive(Debug, Serialize, Deserialize, FromRow)]
pub struct Category {
    id: u16,
    name: String,
}

#[tauri::command]
pub async fn get_categories(state: tauri::State<'_, AppState>) -> Result<Vec<Category>, ()> {
    Ok(sqlx::query_as::<_, Category>("SELECT * FROM categories")
        .fetch_all(&state.db)
        .await
        .unwrap())
}
