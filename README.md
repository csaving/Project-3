# Chicagoland Housing Sales
Data Visualization Track

Topic: housing prices overtime, selling prices versus average market price

Location: greater Chicago area

House type: single family homes

Housing data:
Using zillow’s api “real estate metrics”

3 visualizations:
1.     Map
2.     Line graph
3.     Bar chart: can be changed

Tasks:
- Molly: flask app
- Nathan: mongo DB and data cleaning (use one mongoDB but have 3 "collections" for each series I want to plot)
- Sean: Map
- Cynthia: Line graph and git hub
- Shunjia: bar chart


Notes:
Nathan - 12/27 Hopefully fixed the database now, split it into 3 different ones for home_value, market_length/price_drop, and selling_price. Still need more cleaning up but I believe I had the correct DBs - 01/02 Cleaned up each csv file but primarily focusing on home_value then selling_price once we get a working product. Database completed? but more work needs to be addressed. 01/04 Had to fix heading dates to be strings instead of date category due to javascript issues.