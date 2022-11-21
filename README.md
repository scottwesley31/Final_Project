# Launch-It
A machine learning app to predict success in a business from the time of an IPO.

## What business would you like to start?
The group was interested in IPO's for the past 4 years, to determine which sector, type of business or country affected the success.
>**This is a work in progress and _can/will_ change.**

## Dataset Description
#### The yfinance package was used and yfinance is a python package that enables us to fetch historical market data from Yahoo Finance API in a Pythonic way. You must install yfinance prior to importing.
If using jupyter notebook
```pip install yfinance```
If using google colab
```!pip install yfinance``` 

1. Identify the datasource
    - Link: [The AWS link can be added here]
    - Description:


>**This will also change, for now just experimenting**



## Data exploration example below
  - The csv files were imported, and variables were created and the data was cleaned.
  - Pandas DataFrame was created.
  - try...except statements were used for testing.
  - DataFrames were merged.
  - Dropped null data from dataframe.


## Week One: 

### Repository Management (Square)


### Source Data and Database Management (Circle)
<p>The yfinance Python library offers developers a built-in and relatively easy-to-use option for downloading historical stock data. Documentation for yfinance can be found on <a href="https://pypi.org/project/yfinance/">PyPi yfinance</a>. We additionally utilized a .csv collection of stocks that had gone through the necessary steps to engage in an initial public offering (IPO) in recent years. Four our purposes we were able to glean the last four years of such companies. We then utilized the yfinance documentation and methods to pull historical stock data and additional company qualitative data for recently IPO'd companies.</p>
<p>Upon initial exploration of the data, I came up with a proposed structured table. This attempted to merge much of the harvested information into a single table. <img src="https://github.com/scottwesley31/Final_Project/blob/main/images/database_initial_schema.png" align="right"> In the process of trying to understand the data and figure out some correlations along with building some initial models this kind of merging demonstrated some obvious deficiencies. Attempting to associate some of the qualitative data with the historical stock prices lacked the ability to associate some of the qualitative fields and/or ratios with the specific stock price dates. In exploring how to overcome this, I proposed the solution of utilizing the historical stock data in a neural networking machine model to calculate a growth rate and predicted future stock price for the various companies in the dataset.</p>
<p>Using this new approach afforded us the opportunity to dive into some ML modeling and also disaggregate the tables. As such the datbase is now structured with two tables, with a third table planned. <img src="https://github.com/scottwesley31/Final_Project/blob/main/images/schema_segment2.png" align="left" width=33.3%> The plan at this point is to utilize the model to create a third table with tickers and projected stock prices that can then be used to calculate a projected growth rate for each company. Having this projected growth rate, we can then input this into the qualitative data table and fold this last table into yet another ML model that offers a glimpse at the potential success rate of certain entrepreneurial ventures. Once we have the growth rate, from the initial ML model, we can then export that to the third table of tickers and growth rates and perform a SQL join to merge the growth rate data in the database onto the qualitative data table for all of the companies. This growth rate will then be our label, as positvely growing companies are understood to be sustainable and have a decidedly brighter future than those companies that are diminishing and may potentially be threatened with going concern issues in the near term.</p><br><p><img src="https://github.com/scottwesley31/Final_Project/blob/main/images/ERD_segment2.png"></p>
<p>Once the above has been accomplished, based on user input our desire is to understand the qualitative correlations between features in the company information table to understand which features are most key for future business ventures to incorporate into their business plan.</p>

### Machine Learning Model (Triangle)
After a few weeks of working with the historical stock price data from the companies which have IPO'd within the last four years, we were able to pinpoint a deep learning model (LSTM) which had the capability of forcasting how the future stock price of each company (ticker). LSTM stands for long short-term memory network and is a type of recurrent neural network (RNN). LSTM works in a piecewise fashion - but also is capable of processing the dataset as a whole. It maintains a memory cell known as a "cell state" which allows previous outputs to be used as inputs. Information can be added or removed from the cell state and this process is regulated by "gates". LSTM is common for processing time-series data and generally has the following architecture:

1) Information to omit is determined in a cell at a particular time step using a sigmoid function; it looks at the previous state and the current input and computes the function.
2) Two functions exist in the second layer; sigmoid followed by tanh. The sigmoid functions determines whether to let a 0 or 1 to continue to the output while the tanh function assigns weights to the values passed (importance scaled from -1 to 1).
3) The final output is determined by selecting parts of the cell state that make the output. The cell state is then passed through the tanh function and multiplied by the output of the sigmoid gate.

For more information refer to [this blog post](https://intellipaat.com/blog/what-is-lstm/).

An overview of the structure of an LSTM neural network is shown below:
![LSTM_structure](https://user-images.githubusercontent.com/107309793/202944823-97e02704-db78-43f3-bacc-bc2c35512839.png)

LSTM is an optimal neural network model for our project because it accesses prior inputs (chucks on chronological stock price data in our case) and determines the most likely output (forecasted stock prices). It proceeds in a step-wise manner - taking into account what the stock prices were within a designated lookback period and predicting what the following (or forecasted) stock price is likely to be.

### Use of Technologies and Front-End (X)
