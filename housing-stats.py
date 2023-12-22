import os
import pandas as pd
from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['housingDB']  # Change 'your_database_name' to the desired database name

# Path to the "Data" folder
data_folder = 'Data/'

# List all CSV files in the "Data" folder
csv_files = [file for file in os.listdir(data_folder) if file.endswith('.csv')]

# Iterate over CSV files
for csv_file in csv_files:
    # Construct the full path to the CSV file
    csv_path = os.path.join(data_folder, csv_file)

    # Load CSV data into a Pandas DataFrame
    df = pd.read_csv(csv_path)

    # Convert DataFrame to dictionary for insertion
    data_dict = df.to_dict(orient='records')

    # Create a collection (table) in the MongoDB database
    collection_name = os.path.splitext(csv_file)[0]  # Use the CSV file name as the collection name
    collection = db[collection_name]

    # Insert data into the collection
    collection.insert_many(data_dict)

    print(f"Data from '{csv_file}' inserted into MongoDB collection '{collection_name}'")

# Confirm successful insertion
print("Data insertion completed successfully.")
