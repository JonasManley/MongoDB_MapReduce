 # Exercise: MapReduce with mongoDB (hashtag query) (5 points) 

For this task you need to download twitter dataset from the link mentioned in 2). This time you have to answer query “what are the top 10 hashtags used in the given tweets”. To answer this you need to use MapReduce. You can look at the scheme of the collection using db.collection.findOne(). It will print one record with scheme information. Also you can use function like this.hasOwnProperty(‘field_name’) to check if a field exist in the record. (if the field does not exist you will get error. 

 1. Provide implementation of map and reduce function  

![map and reduce function ](https://github.com/JonasManley/MongoDB_MapReduce/blob/master/map%20reduce%20func.JPG)
 
 3. Provide execution command for running MapReduce  

![Connection to DB](https://github.com/JonasManley/MongoDB_MapReduce/blob/master/connections%20to%20db.JPG)
 
![execution command](https://github.com/JonasManley/MongoDB_MapReduce/blob/master/mapreduce%20funciton%20usasge.JPG)
 
 4. Provide top 10 recorded out of the sorted result. (hint: use sort on the result returned by
    MapReduce)

![top 10 recorded](https://github.com/JonasManley/MongoDB_MapReduce/blob/master/result%20top%2010%20hashtags.JPG)
