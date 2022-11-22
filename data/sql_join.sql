/* Remove historical data from database that is not relevant to current IPO */
DELETE FROM launchit
WHERE "Date" < '2017-12-31';

/* Review table to ensure that rows were removed */
SELECT * FROM launchit
WHERE "Date" < '2017-12-31';

/* Join the industry information onto the launchit_growth table from the launchit_info table */
CREATE OR REPLACE TEMP VIEW grouped_rev AS
SELECT lii.industry, AVG(lig.revenue_growth) AS revenue_growth
FROM launchit_growth as lig
LEFT JOIN launchit_info as lii
  ON lig."TCKR" = lii."TCKR"
/* Group the previous view on average revenue_grwoth by industry */
GROUP BY lii.industry;

/* Join the grouped view of industries and revenue growth with the ROI from the ML model predicting stock price change */
CREATE TABLE launchit_targets AS
SELECT grouped_rev.industry, grouped_rev.revenue_growth, roi."ROI"
FROM grouped_rev
LEFT JOIN "launchit_ROI" AS roi
  ON grouped_rev.industry = roi."Industry";