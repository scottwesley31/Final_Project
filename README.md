<img src="https://github.com/scottwesley31/Final_Project/blob/main/static/images/Launch_IT_7.png" alt="drawing" width=1100 height=300/>

<h1 align="center">A machine learning model to predict success in a business from the time of an Initial Public Offering (IPO)</h1>
<!---A machine learning model to predict success in a business from the time of an Initial Public Offering (IPO)-->

## What business would you like to start?
The group was interested in IPO's to determine if the type of industry affected the success.

### Communication Plan

  - **Platforms utilized for group discussions**: GitHub, Google Drive, Slack, Zoom

The group held weekly meetings via Zoom, in addition to more frequent communication via Slack, and the group met in person.
## Dataset Description

1. Datasource
    - CSV files
    - SQL database
    - Yfinance


#### The yfinance package was used and yfinance is a python package that enables us to fetch historical market data from Yahoo Finance API in a Pythonic way. You must install yfinance prior to importing.
If using jupyter notebook
```pip install yfinance```
If using google colab
```!pip install yfinance``` 

1. Identify the datasource
    - Stocks Analysis: Lists of recent IPO companies were downloaded from <a href="https://stockanalysis.com/ipos/">Stock Analysis</a>. These lists were combined and then used to gather financial data via the yfinance module.
    - yfinance: The <a href="https://pypi.org/project/yfinance/">yfinance</a> library can be used to download market data via Yahoo! Finance API, though the library itself is not owned, managed, or affiliated with Yahoo!. All historical market data was downloaded for each recent (since 2018) IPO company, along with additional qualitative, categorical data.
    - AWS: The data was then cleaned and uploaded to tables in an AWS Database (Launch-IT). There were initially two tables, and then eventually a third table was loaded from the raw data. The LSTM Machine Learning predictive model generated future stock price projected medians for each industry, which were then addtionally loaded into the database. In an effort to compare the stock price projections with the historical revenue growth figures, a temporary SQL table was created and then used to JOIN the industry projections with the average revenue growths per industry:
    <img src="https://github.com/scottwesley31/Final_Project/blob/main/images/SQL_joins.png" alight='right'>
    The temp method was used in this case to ease the memory constraints of the initial view created, as it would no longer be needed once the ROI information was joined to the Industry and revenue growth table. The final table, containing both revenue growth and projected stock price changes, may give the user additional insight into industry performance and how well various metrics may correlate to a successful business/investment venture.


>**This will also change, for now just experimenting**



## Data exploration example below
  - The csv files were imported, and variables were created and the data was cleaned.
  - Pandas DataFrame was created.
  - try...except statements were used for testing.
  - Additional data pertaining to each entity in the csv files were harvested from the yfinance API.
  - DataFrames were created based on the datasets harvested of historical stock data and qualitative compnay information.
  - Dropped null data from dataframe.
  - The dataframes were both loaded to separate tables in an AWS database for the team to use in creation of ML models.


## Week One: 

### Repository Management (Square)


### Source Data and Database Management (Circle)
<p>The yfinance Python library offers developers a built-in and relatively easy-to-use option for downloading historical stock data. Documentation for yfinance can be found on <a href="https://pypi.org/project/yfinance/">PyPi yfinance</a>. We additionally utilized a .csv collection of stocks that had gone through the necessary steps to engage in an initial public offering (IPO) in recent years. For our purposes we were able to glean the last four years of such companies. We then utilized the yfinance documentation and methods to pull historical stock data and additional company qualitative data for recently IPO'd companies.</p>
<p>Upon initial exploration of the data, I came up with a proposed structured table. This attempted to merge much of the harvested information into a single table. <img src="https://github.com/scottwesley31/Final_Project/blob/main/images/database_initial_schema.png" align="right"> In the process of trying to understand the data and figure out some correlations along with building some initial models this kind of merging demonstrated some obvious deficiencies. Attempting to associate some of the qualitative data with the historical stock prices lacked the ability to associate some of the qualitative fields and/or ratios with the specific stock price dates. In exploring how to overcome this, I proposed the solution of utilizing the historical stock data in a neural networking machine model to calculate a growth rate and predicted future stock price for the various companies in the dataset.</p>
<p>Using this new approach afforded us the opportunity to dive into some ML modeling and also disaggregate the tables. As such the datbase is now structured with two tables, with a third table planned. <img src="https://github.com/scottwesley31/Final_Project/blob/main/images/schema_segment2.png" align="left" width=33.3%> The plan at this point is to utilize the model to create a third table with tickers and projected stock prices that can then be used to calculate a projected growth rate for each company. Having this projected growth rate, we can then input this into the qualitative data table and fold this last table into yet another ML model that offers a glimpse at the potential success rate of certain entrepreneurial ventures. Once we have the growth rate, from the initial ML model, we can then export that to the third table of tickers and growth rates and perform a SQL join to merge the growth rate data in the database onto the qualitative data table for all of the companies. This growth rate will then be our label, as positvely growing companies are understood to be sustainable and have a decidedly brighter future than those companies that are diminishing and may potentially be threatened with going concern issues in the near term.</p><br><p><img src="https://github.com/scottwesley31/Final_Project/blob/main/images/ERD_segment2.png"></p>
<p>Once the above has been accomplished, based on user input our desire is to understand the qualitative correlations between features in the company information table to understand which features are most key for future business ventures to incorporate into their business plan.</p>

### Machine Learning Model (Triangle)

* Unsupervised Machine Learning: 

#### Questionable..?

* Supervised Machine Learning:


### Use of Technologies and Front-End (X)
