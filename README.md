<img src="https://github.com/scottwesley31/Final_Project/blob/main/static/images/Launch_IT_7.png" alt="drawing" width=1100 height=300/>

<h1 align="center">A machine learning model to predict success in a business from the time of an Initial Public Offering (IPO)</h1>
<!---A machine learning model to predict success in a business from the time of an Initial Public Offering (IPO)-->

## What business would you like to start?
The group was interested in IPO's in order to determine if the type of industry or sector affected the success of a business going public.

### Communication Plan

  - **Platforms utilized for group discussions**: GitHub, Google Drive, Slack, Zoom, google meet.

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


>
## Data exploration example below
  - The csv files were imported, and variables were created and the data was cleaned.
  - Pandas DataFrame was created.
  - try...except statements were used for testing.
  - Additional data pertaining to each entity in the csv files were harvested from the yfinance API.
  - DataFrames were created based on the datasets harvested of historical stock data and qualitative compnay information.
  - Dropped null data from dataframe.
  - The dataframes were both loaded to separate tables in an AWS database for the team to use in creation of ML models.


### Repository Management (Square)


### Source Data and Database Management (Circle)
<p>The yfinance Python library offers developers a built-in and relatively easy-to-use option for downloading historical stock data. Documentation for yfinance can be found on <a href="https://pypi.org/project/yfinance/">PyPi yfinance</a>. We additionally utilized a .csv collection of stocks that had gone through the necessary steps to engage in an initial public offering (IPO) in recent years. For our purposes we were able to glean the last four years of such companies. We then utilized the yfinance documentation and methods to pull historical stock data and additional company qualitative data for recently IPO'd companies.</p>
<p>Upon initial exploration of the data, I came up with a proposed structured table. This attempted to merge much of the harvested information into a single table. <img src="https://github.com/scottwesley31/Final_Project/blob/main/images/database_initial_schema.png" align="right"> In the process of trying to understand the data and figure out some correlations along with building some initial models this kind of merging demonstrated some obvious deficiencies. Attempting to associate some of the qualitative data with the historical stock prices lacked the ability to associate some of the qualitative fields and/or ratios with the specific stock price dates. In exploring how to overcome this, I proposed the solution of utilizing the historical stock data in a neural networking machine model to calculate a growth rate and predicted future stock price for the various companies in the dataset.</p>
<p>Using this new approach afforded us the opportunity to dive into some ML modeling and also disaggregate the tables. As such the datbase is now structured with two tables, with a third table planned. <img src="https://github.com/scottwesley31/Final_Project/blob/main/images/schema_segment2.png" align="left" width=33.3%> The plan at this point is to utilize the model to create a third table with tickers and projected stock prices that can then be used to calculate a projected growth rate for each company. Having this projected growth rate, we can then input this into the qualitative data table and fold this last table into yet another ML model that offers a glimpse at the potential success rate of certain entrepreneurial ventures. Once we have the growth rate, from the initial ML model, we can then export that to the third table of tickers and growth rates and perform a SQL join to merge the growth rate data in the database onto the qualitative data table for all of the companies. This growth rate will then be our label, as positvely growing companies are understood to be sustainable and have a decidedly brighter future than those companies that are diminishing and may potentially be threatened with going concern issues in the near term.</p><br><p><img src="https://github.com/scottwesley31/Final_Project/blob/main/images/ERD_segment2.png"></p>
<p>Once the above has been accomplished, based on user input our desire is to understand the qualitative correlations between features in the company information table to understand which features are most key for future business ventures to incorporate into their business plan.</p>

### Machine Learning Model (Triangle)

#### Preliminary Stages

Since the primary objective of our project was to determine specific features within businesses that IPO'd within the last four years which contribute to their overall success, we started off with a dataset which included stock price time-series data for said business, as well as additional columns which could have importance in how the business functions (or how fiscally successful it was). These columns - which were merged onto the time-series data by the unique tickers - included sector, industry, country, growth rate, debt to equity, current ratio, and forward PE.

The first stages of our machine learning involved a lot of exploration being that we hadn't determined a way to properly define "success" in terms of the data that was available to us to merge together for the businesses we were looking into. We weren't sure if we should have considered supervised ML because our target data was unclear. We were also unsure if the dataset we had (which at this point consisted of 649,726 rows and 15 columns) could generate clustering through unsupervised ML methods in a way that would have any meaning. We split up and had one group member go the supervised learning route while having another member attempt unsupervised learning.

This exploration period demonstrated that our preliminary dataset was inappropriately compiled; even though the qualitative data was merged properly to the time-series data by ticker, duplicating the information multiple times for every ticker at every trading date does not result in a usable dataset for ML. Ultimately we pivoted our strategy and decided to treat the time-series stock price data independently from the qualitative business-relevant data. The time-series data could be utilized specifically for forecasting stock prices in the future which would allow us to calculate a projected return on investment (ROI) for each business using the following calculation:

**(Forecasted stock price - Most recent stock price)/(Most recent stock price)**

The calculated ROI for each business could then be merged into the business features specific dataset by ticker and then used as a target in supervised ML. A positive ROI could generally indicate a business projected to be "successful" accourding to our model, while a negative ROI could indicate an "unsuccessful" business. These generalizations on the calculated ROI provided us with labeled data in the context of business success.

#### Long Short-Term Memory Network (LSTM)

After a few weeks of working with the historical stock price data from the companies which have IPO'd within the last four years, we were able to pinpoint a deep learning model which had the capability of forcasting the future stock price of each company (ticker). LSTM stands for long short-term memory network and is a type of recurrent neural network (RNN). LSTM works in a piecewise fashion - but also is capable of processing the dataset as a whole. It maintains a memory cell known as a "cell state" which allows previous outputs to be used as inputs. Information can be added or removed from the cell state and this process is regulated by "gates". LSTM is common for processing time-series data and generally has the following architecture:

1) Information to omit is determined in a cell at a particular time step using a sigmoid function; it looks at the previous state and the current input and computes the function.
2) Two functions exist in the second layer; sigmoid followed by tanh. The sigmoid functions determines whether to let a 0 or 1 to continue to the output while the tanh function assigns weights to the values passed (importance scaled from -1 to 1).
3) The final output is determined by selecting parts of the cell state that make the output. The cell state is then passed through the tanh function and multiplied by the output of the sigmoid gate.

For more information refer to [this blog post](https://intellipaat.com/blog/what-is-lstm/).

An overview of the structure of an LSTM neural network is shown below:
![LSTM_structure](https://user-images.githubusercontent.com/107309793/202944823-97e02704-db78-43f3-bacc-bc2c35512839.png)

LSTM is an optimal neural network model for our project because it accesses prior inputs (chucks on chronological stock price data in our case) and determines the most likely output (forecasted stock prices). It proceeds in a step-wise manner - taking into account what the stock prices were within a designated lookback period and predicting what the following (or forecasted) stock price is likely to be.

In order to accomplish stock analysis predictions and therefore obtain growth rate (aka ROI or "return on investment"), a Python script was written to pull the time-series stock data and ticker specific information from the AWS database, merge the data into a single table, filter the table for stock data relevant to a specific category (such as industry or sector), and then to use this dataframe to run the LSTM model and make predictions on future stock prices. The script includes a function which calculates growth rate and scales it up to a projection 1 year out from the most recent adjusted close price.

The full Python script can be accessed by opening the `Machine_Learning` folder and viewing the `LSTM - Final.ipynb` file. Here are a few highlights from the file:

A `data_all` dataframe was created which merges the time-series stock data (`stock_data`) and the ticker info data (`info_data`) as seen here:

![data_all_table](https://user-images.githubusercontent.com/107309793/202946638-a3560329-c61f-4599-af84-80de9917ede5.png)

This dataframe consists of 649,726 rows which includes data from 1,577 tickers and their associated stock prices over the last 4 years (2019-2022).

In order to filter this original table for only time-series data relevant to specific categories, two functions were created: the `create_stock_group_list` function and the `create_LSTM_df` function. The `create_stock_group_list` function generates a list of unique values within the column of interest (i.e. a list of all the industries, or sectors, or countries, etc). This resulting list was named `stock_groups`. The `create_LSTM_df` function creates a new dataframe which filters the original dataset for only relevant columns, sets the `Date` column as the index, takes the median of all the stock prices at each date for the specified category, and then reformats the dataframe for the LSTM model.

Once the cleaned stock data dataframe is obtain and filtered for the category of interest, it is then run through an `LSTM_model` function. This function utilizes tools from numpy, tensorflow (keras), and sklearn to handle/reshape the data and to run it through a neural network with LSTM architecture. Here is an overview of the steps within this model:
1) Obtain the filtered and cleaned dataframe of interest
2) Scale the data
3) Generate input (lookback period) and output (forecast period) sequences. In our case, we chose a lookback period of 100 days and a forecast period of 60 days.
4) Fit the LSTM model
5) Predict the forecasts
6) Organize the results into a dataframe
7) Plot the results (which includes the actual stock prices and the forcasted stock prices)
8) Calculate the ROI based on projected future stock price and scale up to 1 year

#### Training and Testing Sets
The LSTM model works by looking at the data in a step-wise fashion. Here is the code block that handles the adjusted close values (after having been scaled) and splits them up into relevant chunks:

![LSTM_training_set](https://user-images.githubusercontent.com/107309793/203419189-dda9c6cd-23a7-4b3f-8140-30af3c69e4c6.png)

This code defines the input sequence (`n_lookback`) as a 100-day chunk and the output sequence (`n_forecast`) as a 60-day chunk. The for loop pairs these two input and output chunks together; the 100-day chunk results in its subsequent 60-day chunk. In the context of the adjusted close prices - the first 100 trading days are observed and related to the subsequent 60 trading day prices afterwords. The for loop continues to the next 100-day and 60-day pair until it reaches the end of all the values (`len(y)`). Each of these data chuncks are appended into separate lists which are used to train the model on. `X` represents all of the 100-day stock price chunks and `Y` represents all of their associated 60-day stock price chunks that follow. `Y` can be thought of as the target variable for `X`.

After the model has trained using the `X` and `Y` lists, the following code block generates the testing dataset (the forecasts):

![LSTM_testing_set](https://user-images.githubusercontent.com/107309793/203420779-6b14e682-e6cb-4ad7-bcd1-490d40913066.png)

In this case, the very last set of 100-days is used to generate an associated 60-day `Y`. The predicted 60-day chunk of stock prices are the forecast; stock prices that extend past the most recent date.

Here are a few examples of a plot which includes the actual stock price data and the resulting forecasted stock prices generated from the LSTM model:

**Sector Example**
![Basic_Materials_chart](https://user-images.githubusercontent.com/107309793/203425587-a16cdde6-cbac-4ac6-b48f-04173d74e22b.png)

**Industry Example**
![Oil_Gas_Chart](https://user-images.githubusercontent.com/107309793/203426056-c5647e2b-8652-48d3-8e02-60d70830b276.png)

**Country Example**
![China_chart](https://user-images.githubusercontent.com/107309793/203426077-2df18740-d5cb-499a-ac8b-4b2234788d41.png)

The last step in our machine learning process was to obtain the return on investment values from every category of interest (i.e. industry, sector, etc) and to generate a new dataframe with this information. This was accomplished by creating a dataframe which contains the list of unique values (`stock_groups`) defined earlier and appending the scaled ROI value obtained from the `LSTM_model` function. If it is unable to run the model function for any reason - and subsequently fail to calculate an ROI, the iteration generates a `NaN`.

Here is an example of the resulting ROI dataframe - in this case the ROI was calculated from current and forecasted stock prices for each sector:

![ROI_df](https://user-images.githubusercontent.com/107309793/202954251-a990fed6-752c-48fe-a2be-e16d38ae0135.png)

The calculated ROI values can provide some insight to the user as to how investor perception of a company's ability to earn and grow might change in the near future. Since these companies are relatively new (IPO'd in the last 4 years), it may also indicate how a relatively new company might fare in the upcoming economic climate. The overall goal of this model is to forecast stock data in a way that could provide future entrepreneurs insight into which new companies are thriving (or not), what industries/sectors they're part of, and where they are in the world.

#### Limitations and Benefits
Traditional recurrent neural networks (RNNs) require long-term information to travel sequentially through all cells prior to getting to the processing cell. LSTM models improve this process by enforcing switch gates which allow for information to bypass units and still retain a memory. Despite this improvement, this model still requires a lot of resources (memory) and time to run the model. LSTM models are also quite prone to overfitting. Read more about the advantages and disadvantages of LSTM networks [here](https://www.geeksforgeeks.org/understanding-of-lstm-networks/).

Some other notable limitations of our LSTM model:
1) A very small current stock price followed by a significantly larger forecasted stock price resulted in exaggerated magnitudes of ROI.

The Chemicals industry produced an outlier ROI. Here are the stock prices the model generated:

![chemicals_issue](https://user-images.githubusercontent.com/107309793/203441589-63dc8902-00e8-41cd-a0df-cdf0a817b81c.png)

Plugging this into our ROI equation:
(-1.08-0.002)/0.002 = -53

The majority of the data generated ROI's that were between -2 and 2 (prior to being scaled). This is a fundamental issue with our generalization that the calculated ROI always indicates growth. Mathematically - it doesn't always work out.

2) The time-series data was grouped into categories and the median value of all stock prices at a single date was chosen to represent the overall price of every ticker within this category. This generalization does not account for variations in the distribution of these prices which could be affected by outliers or missing data.

### Use of Technologies and Front-End (X)
