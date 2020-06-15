# Visualization-2nd-Project
For this Project we have used different programs all linked together: Python,PosgreSQL,SQLAlchemy, Google Analytics, HTML, CSS, Java Script, D3, Chart.js,Google Maps, Leaflet and Flask. 

We have chosen the gig-move bar product because as you can see in the bar chart dropdown it is the one with more views in the dealers website. Using the CSV file with all the dealers nationwide we did a research to have a sample of 13 random Dealers that have the Gig Move Bar into their website. After that we decided to get the Logo, Price and Description scraping each website using Beautiful Soup.
We wanted to check how the product was presented into each website in order to see similarities and differences in order to make some recommendations to the Dealers that need content improvements. 
At the end of the scraping we have got all the data for each Dealer and we converted that into a data frame using Pandas, cleaned it and finally converted it into a CSV and that was the one that we used for PosgreSQL.
Using Flask we converted the PosgreSQL table into a json file in order to pull up the data of each dealer once you choose one in the dropdown menu of the html.
To see the Google Analytics use http://localhost:8000/line.html and http://localhost:8000/realtime.html for the Chart.js, User: staceydata3@gmail.com password: bootcamp2020. 
Flask: 
export FLASK_APP=main.py
export FLASK_DEBUG=main.py
flask run
Mapbox and Google Maps APIs are already given. 
