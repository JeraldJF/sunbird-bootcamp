# Sample SQL Queries

Crop Production
```json
SELECT State_Name, District_Name, SUM(Production) AS Total_Production FROM "crop-production-1" WHERE "__time" BETWEEN TIMESTAMP '2011-05-01' AND '2012-03-31' GROUP BY State_Name, District_Name
```

Weather Data

```json
SELECT state_name, district_name, AVG(grid_rainfall) AS Average_Rainfall FROM "weather-data-1" WHERE "__time" = TIMESTAMP '2017-06-01' GROUP BY state_name, district_name ORDER BY Average_Rainfall DESC 
```

School Data

```json
SELECT "School_Area", COUNT(*) AS Total_Schools FROM "school-data-1" GROUP BY "School_Area"
```



