import sqlite3

def get_films_by_text(search_text, db_path='midb.db'):
    """
    Query films from MIDB database by text search.
    
    Args:
        search_text (str): Text to search in film titles or descriptions
        db_path (str): Path to the database file
    
    Returns:
        list: List of film records matching the search
    """
    try:
        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()
        
        query = """
            SELECT * FROM films 
            WHERE title LIKE ? OR description LIKE ?
        """
        
        search_param = f"%{search_text}%"
        cursor.execute(query, (search_param, search_param))
        
        films = cursor.fetchall()
        conn.close()
        
        return films
    
    except sqlite3.Error as e:
        print(f"Database error: {e}")
        return []

# Example usage
if __name__ == "__main__":
    results = get_films_by_text("action")
    for film in results:
        print(film)