import pymysql

db=pymysql.connect(host='localhost',user='root',password='',database='preschool')
cursor=db.cursor(pymysql.cursors.DictCursor)

 


#db=pymysql.connect(host='bjal7xqbljqgtenyhzoc-mysql.services.clever-cloud.com',port=3306,user='up4qwvnovjj3h9bh',password='s5tS1lJwtdbPLqkZAJnm',database='bjal7xqbljqgtenyhzoc')
#cursor=db.cursor(pymysql.cursors.DictCursor)