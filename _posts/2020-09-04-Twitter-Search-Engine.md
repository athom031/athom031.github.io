---
layout: post
title: "Twitter Search Engine: Full Stack Web Application"
---
#### Techstack: Spring, React, Twitter Dev API, Twitter 4J, Lucene
---
<br>

#### Project Overview
A search engine for crawled tweet data. With a Lucene Index, this search engine has the ability to search millions of tweets and return the most recent and relevant results based on a user query.

##### Project Pipeline: Back End – Spring, Front End – React, Twitter Dev API, Twitter 4j

<img src="{{ site.url }}/assets/Files/TwitterSearch/front_end_search.png"/>

## Crawl and Indexing

### Crawl

To crawl twitter, a connection to the Twitter API using a Twitter 4j object and developer keys was made, opening up a stream of tweets. For the tweets, there are two explicit parameters:
* Tweets tagged with "English" language
* GPS bounding box for the United States of America

Example crawled tweets are located [here](https://github.com/athom031/TwitterCrawlAndSearch/tree/master/crawl_index/data-sample).

Initially, crawled data also included:
* Datetime
* Geolocation (Latitude, Longitude)
* User

But embedding tweets in front-end application only needed the unique Tweet ID.</br>
Text and timestamp are kept as parameters for the actual search feature.

### Indexing

The index structure generated uses the Lucene library object IndexWriter. The index is built by loading all of the .JSON objects in the .JSON line formatted files into memory which are then parsed to create documents for the lucene index.

When a .JSON object (a Tweet) is parsed, the text of the Tweet is stored as a TextField in the index’s document. This is the baseline used when searching the index later. The ID is not used in the tweet itself but is primarily used when representing the tweet on the front end. The timestamp of the Tweet is stored twice: once as a NumericDocValuesField (used for search score boosting) and once as a LongPoint (for drill down search functionality).

## Web Application

### Back End

The LuceneBuilder Class was manipulated to fit the constraints of the Spring framework to create a working backend for search queries. But the default Spring framework proved erroneous due to the front end and back end being on local host in development. This meant that cross origin request errors were not linking the frontend and backend properly. Therefore a more specialized [framework](https://spring.io/guides/gs/rest-service-cors/) was used.

<img src="{{ site.url }}/assets/Files/TwitterSearch/back_end.png"/>

### Front End

The react twitter embed [component](https://www.npmjs.com/package/react-twitter-embed) made displaying the relevant tweets quite easy. The overhead just came with changing the Index and having to crawl for newly parameterized tweet data.

The website changes based on the current state of the App class (depending on whether or not a user has entered a query). Once the query is submitted, it calls the front end to get the ID of the 10 most relevant tweets, and uses the embed component to display the tweets in a familiar way.

<img src="{{ site.url }}/assets/Files/TwitterSearch/front_end_result.png"/>


### Github Repo

[Check It Out!](https://github.com/athom031/TwitterCrawlAndSearch)
##### Setup Instructions Included
