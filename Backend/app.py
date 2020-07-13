"""
Coding is fun :)
"""




from flask import Flask,request,jsonify,redirect,url_for,send_file
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
from database_connect import db,cursor
from passlib.hash import sha256_crypt
import jwt




app=Flask(__name__)
CORS(app)

############Uploaded files eg. image

UPLOAD_FOLDER="./static"
ALLOWED_EXTENSIONS=set(["jpeg","jpg","png",'pdf','mp3','mp4'])
app.config["UPLOAD_FOLDER"]=UPLOAD_FOLDER
app.config["ALLOWED_EXTENSIONS"]=ALLOWED_EXTENSIONS

secret="eeeeertbmbmmmmmmmmmmm"



app.config.update(
    DEBUG=True,
    #Email settings
    MAIL_SERVER='smtp.gmail.com',
    MAIL_PORT=465,
    MAIL_USE_SSL=True,
    MAIL_USERNAME='aljay3334@gmail.com',
    MAIL_PASSWORD="mmmmm"

)

#mail=Mail(app)













'''The function below is for looping through a
a list containing dictionaries in order to
get an item in a dictionary in a list
eg. 
[
    {
        "pdf":"/static/pdf"
    }
]
I will use it
'''


def search(name,items):
    for p in items:
        if p['name']==name:
            return p








'''Common routes for admin,students and teachers/instructors
This will avoid repeatition and unecessary sql queries'''

################For users to view courses
@app.route("/courses",methods=["GET"])
def courses():
    if request.method=="GET":
        sql="SELECT* FROM courses"
        cursor.execute(sql)
        courses=cursor.fetchall()
        return jsonify(courses)
        


########For users to view shs courses
@app.route("/shs_courses",methods=["GET"])
def shs_courses():
    if request.method=="GET":
        sql="SELECT* FROM courses WHERE level=%s ORDER BY created_at DESC"
        data="shs"
        cursor.execute(sql,data)
        shs_courses=cursor.fetchall()
        return jsonify(shs_courses)

######For users to view jhs courses
@app.route("/jhs_courses",methods=["GET"])
def jhs_courses():
    if request.method=="GET":
        sql="SELECT* FROM courses WHERE level=%s ORDER BY created_at DESC"
        data="jhs"
        cursor.execute(sql,data)
        shs_courses=cursor.fetchall()
        return jsonify(shs_courses)       


######For users to search for shs courses
@app.route("/search_shs_courses",methods=["POST"])
def search_shs_courses():
    if request.method=="POST":
        name=request.form["name"]
        level="shs"
        sql="SELECT* FROM courses WHERE level=%s AND name LIKE %s ORDER BY created_at DESC"
        data=(level,"%"+name+"%")
        cursor.execute(sql,data)
        shs_courses=cursor.fetchall()
        return jsonify(shs_courses)
        

######For users to search for jhs courses
@app.route("/search_jhs_courses",methods=["POST"])
def search_jhs_courses():
    if request.method=="POST":
        name=request.form["name"]
        level="jhs"
        sql="SELECT* FROM courses WHERE level=%s AND name LIKE %s ORDER BY created_at DESC"
        data=(level,"%"+name+"%")
        cursor.execute(sql,data)
        jhs_courses=cursor.fetchall()
        return jsonify(jhs_courses)
       



'''For instructor to delete his course and admin to delete a course
This is  only for admin and teachers/instructors
Proper JWT authorization will be done on the front end to 
hide the delete button for students
'''
@app.route("/course_delete/<int:course_id>",methods=["DELETE"])
def course_delete(course_id):
    sql="DELETE FROM courses WHERE courses.id=%s"
    data=course_id
    cursor.execute(sql,data)
    return jsonify({"message":"Course deleted"})


#####For everyone to view a pdf including admin
@app.route("/view_pdf/<int:pdf_id>",methods=["GET"])
def download_pdf(pdf_id):
    if request.method=="GET":
        sql="SELECT pdf FROM pdfs WHERE id=%s"
        data=pdf_id
        cursor.execute(sql,data)
        pdf=cursor.fetchall()
        return jsonify(pdf)


###########For admin and teacher/instructor to delete a pdf
@app.route("/delete_pdf/<int:pdf_id>",methods=["DELETE"])   
def delete_pdf(pdf_id):
    if request.method=="DELETE":
        sql="DELETE FROM pdfs WHERE id=%s"
        data=pdf_id
        cursor.execute(sql,data)
        return jsonify("Pdf deleted")




########For everyone to view a video
@app.route("/view_video/<int:video_id>",methods=["GET"])
def view_video(video_id):
    if request.method=="GET":
        sql="SELECT* FROM videos WHERE id=%s"
        data=video_id
        cursor.execute(sql,data)
        video=cursor.fetchall()
        return jsonify(video)



       
#######For anyone to view questions under a course
@app.route("/view_questions/<int:course_id>",methods=["GET"])
def view_questions(course_id):
    if request.method=="GET":
        sql="SELECT* FROM questions WHERE course_id=%s ORDER BY created_at DESC"
        data=course_id
        cursor.execute(sql,data)
        course_questions=cursor.fetchall()
        questions=list(map(mapper,course_questions))
        return jsonify(questions)
        

######For admin and Instructor to delete a question
@app.route("/delete_question/<int:question_id>",methods=["DELETE"])
def delete_question(question_id):
    if request.method=="DELETE":
        sql="DELETE FROM questions WHERE id=%s"
        data=question_id
        cursor.execute(sql,data)
        return jsonify("Question deleted")



########For admin and Instructor to delete video
@app.route("/delete_video/<int:video_id>",methods=["DELETE"])
def delete_video(video_id):
    if request.method=="DELETE":
        sql="DELETE FROM videos WHERE id=%s"
        data=video_id
        cursor.execute(sql,data)
        return jsonify("Video deleted")










####################Admin api routes###############
@app.route('/admin_signup',methods=["POST"])
def admin_signup():
    if request.method=='POST':
        name=request.json.get('name')
        email=request.json.get('email')
        password=request.json.get('password')
        ################Hashing the password
        
        sql="SELECT email from admin WHERE email=%s"
        data=email
        result=cursor.execute(sql,data)
        account=cursor.fetchone()
        
        
        if account:
            return jsonify({"error":"Admin with email already exists!"})
        else:
            admin_img="static/avatar.jpg"
            
             
            sql="INSERT INTO admin(name,email,password,admin_img) VALUES (%s,%s,%s,%s)"
            data=(name,email,password,admin_img)
            
            cursor.execute(sql,data)
            db.commit()  
            
            return jsonify({"message":"You're successfully registered"})
           



@app.route('/admin_login', methods=["POST","GET"])
def admin_login():
    if request.method=="POST":
        email=request.json.get('email')
        password=request.json.get('password')
        sql="SELECT* FROM admin WHERE email=%s AND password=%s"
        data=(email,password)
        cursor.execute(sql,data)
        account=cursor.fetchone()
        
        if account:
            admin_id=account["id"]  #id in admin table==admin_id
            email=account["email"]
            payload={
                'admin_id':admin_id
                
                
                
            }
            admin_token=jwt.encode(payload,secret)
            return jsonify(admin_token.decode("UTF-8"))

        else:
            
            return jsonify({"error":"Invalid credentials"})



##########Admin Profile Below#####################
@app.route('/admin_profile', methods=['GET'])
def admin_profile():
    if request.method=="GET":
        jwt_decoded=request.headers.get("Authorization")
        decoded=jwt.decode( jwt_decoded, secret, algorithm=['HS256'])
        admin_id=decoded['admin_id']

        sql="SELECT* FROM admin WHERE admin.id=%s"
        data=admin_id
        cursor.execute(sql,data)
        profile_info=cursor.fetchall()
        return jsonify({"profile_info":profile_info})









####################For Admin to view students###############
@app.route("/view_students",methods=["GET"])
def view_students():
    if request.method=="GET":
        sql="SELECT* FROM students"
        cursor.execute(sql)
        students=cursor.fetchall()
        return jsonify(students)

###################For admin to view instructors or teachers########
@app.route("/view_instructors",methods=["GET"])   
def view_instructors():
    if request.method=="GET":
        sql="SELECT* FROM instructors"
        cursor.execute(sql)
        instructors=cursor.fetchall()
        return jsonify(instructors)



#############For admin to delete a student
@app.route("/delete_student/<int:student_id>",methods=["DELETE"])   
def delete_student(student_id):
    if request.method=="DELETE":
        sql="DELETE FROM students WHERE id=%s"
        data=student_id
        cursor.execute(sql,data)
        return jsonify("Student Deleted")
       


#############For admin to delete an instructor or a teacher
@app.route("/delete_instructor/<int:instructor_id>",methods=["DELETE"])   
def delete_instructor(instructor_id):
    if request.method=="DELETE":
        sql="DELETE FROM instructors WHERE id=%s"
        data=instructor_id
        cursor.execute(sql,data)
        return jsonify("Instructor Deleted")
       








################Students api routes################################

#students signup or users signup below
@app.route('/student_signup',methods=["POST","GET"])
def studentsignup():
    if request.method=='POST':
        name=request.json.get('fullname')
        email=request.json.get('email')
        password=request.json.get('password')
        ########Hashing the password
        
    
        sql="SELECT email from students WHERE email=%s"
        data=email
        result=cursor.execute(sql,data)
        account=cursor.fetchone()
        
        
        if account:
            return jsonify({"error":"Student with email already exists!"})
        else:
            student_img="/static/avatar.jpg"
        
             
            sql="INSERT INTO students(name,email,password,student_img) VALUES (%s,%s,%s,%s)"
            data=(name,email,password,student_img)
            
            cursor.execute(sql,data)
            db.commit()  
            
            return jsonify({"message":"You're successfully registered"})
              
        
#####Student login below
@app.route('/student_login', methods=["POST"])
def studentlogin():
    if request.method=="POST":
        email=request.json.get('email')
        password=request.json.get('password')
        
       
        
        sql="SELECT* FROM students WHERE email=%s AND password=%s"
        data=(email,password)
        cursor.execute(sql,data)
        account=cursor.fetchone()
        
        if account:
            student_id=account["id"]  #id in users table=user_id
            email=account["email"]
            payload={
                'student_id':student_id
                
            }
            student_token=jwt.encode(payload,secret)
            return jsonify(student_token.decode("UTF-8"))

        else:
            
            return jsonify({"error":"Invalid email or password"})
                      

        

########################Student Profile#######################################

@app.route('/student_profile', methods=['GET'])
def student_profile():
    if request.method=="GET":
        jwt_decoded=request.headers.get("Authorization")
        decoded=jwt.decode( jwt_decoded, secret, algorithm=['HS256'])
        student_id=decoded['student_id']

        sql="SELECT* FROM students WHERE students.id=%s"
        data=student_id
        cursor.execute(sql,data)
        profile_info=cursor.fetchall()
        return jsonify({"profile_info":profile_info})





########For student to edit his/her profile

@app.route("/student_update_profile_img",methods=["PUT","POST"])
def student_update_profile_img():
    jwt_decoded=request.headers.get('Authorization')
    decoded=jwt.decode(jwt_decoded,secret, algorithms=['HS256'])
    student_id=decoded['student_id']
    file=request.files["student_img"]
    file.save(os.path.join(app.config["UPLOAD_FOLDER"],secure_filename(file.filename)))
    student_img= "/static/"+file.filename 
              
    sql="UPDATE students SET student_img=%s WHERE students.id=%s"
    data=(student_img,student_id)
    cursor.execute(sql,data)
    db.commit
    return jsonify({"message":"Profile picture updated sucessfully"})









###########For student to update his/her name
@app.route("/student_update_name", methods=["POST","GET"])
def student_update_name():
    if request.method=="POST":
        jwt_decoded=request.headers.get('Authorization')
        decoded=jwt.decode(jwt_decoded,secret, algorithms=['HS256'])
        student_id=decoded['student_id']
        bio=request.get_json('name')
        
        sql="UPDATE students SET name=%s WHERE id=%s"
        data=(bio,student_id)
        cursor.execute(sql,data)
        db.commit()
        return jsonify({"message":"Name updated sucessfully"})
  


   




''''Fetch a course description when a student wants to see course description
This route is also for teachers to view number of his videos,pdf and quiz
'''''
@app.route("/courses/<int:course_id>",methods=["POST","GET"])
def see_description(course_id):
    if request.method=="GET":
        sql1="SELECT courses.id,courses.name,courses.description,instructor_name,instructors.id,instructors.instructor_img,bio FROM courses,instructors WHERE courses.instructor_id=instructors.id AND  courses.id=%s"
        data=course_id
        cursor.execute(sql1,data)
        description=cursor.fetchall()
        sql2="SELECT COUNT(*) as totalvideos FROM videos  WHERE course_id=%s"
        cursor.execute(sql2,data)
        video_count=cursor.fetchall()
        sql3="SELECT COUNT(*)  as totalpdfs FROM pdfs WHERE course_id=%s"
        cursor.execute(sql3,data)
        pdf_count=cursor.fetchall()
        sql4="SELECT COUNT(*) as totalquestions FROM questions WHERE course_id=%s"
        cursor.execute(sql4,data)
        question_count=cursor.fetchall()
       
        return jsonify(
           {"description":description, 
           "video_count":video_count,
           "pdf_count":pdf_count,
           "question_count":question_count
          
            })
            


######For student to view a course description before enrolling
@app.route("/view_course/<int:course_id>")
def view_course(course_id):
    if request.method=="GET":
        sql1="SELECT courses.id,courses.name,courses.description,instructor_name,instructor_id,instructor_img,bio,email FROM courses,instructors WHERE courses.instructor_id=instructors.id AND  courses.id=%s"
        data=course_id
        cursor.execute(sql1,data)
        course_description=cursor.fetchall()
        return jsonify(course_description)




#########For student to enroll in a course
@app.route("/enroll/<int:course_id>",methods=["POST"])
def enroll(course_id):
    if request.method=="POST":
        jwt_decoded=request.headers.get('Authorization')
        decoded=jwt.decode(jwt_decoded,secret, algorithms=['HS256'])
        student_id=decoded['student_id']
        '''This is to check if student enrolls in a course or not
        If student has already enrolled, it will alert the student
        else we insert student details
        '''
        sql="SELECT* FROM enrolled_courses WHERE student_id=%s AND course_id=%s"
        data=(student_id,course_id)
        cursor.execute(sql,data)
        enrolled=cursor.fetchone()
        if enrolled:
            return jsonify({"message":"You have already enrolled in this course"})
        else:
            sql="INSERT INTO enrolled_courses(student_id,course_id) VALUES(%s,%s)"
            data=(student_id,course_id)
            cursor.execute(sql,data)
            db.commit()
            return jsonify("You have sucessfully enrolled")




#########For student to Unenroll in his courses that he has been enrolled
@app.route("/un_enroll/<int:course_id>",methods=["DELETE"])
def unenroll(course_id):
    if request.method=="DELETE":
        token=request.headers.get("Authorization")
        jwt_decoded=request.headers.get('Authorization')
        decoded=jwt.decode(jwt_decoded,secret, algorithms=['HS256'])
        student_id=decoded['student_id']

        sql="DELETE FROM enrolled_courses WHERE student_id=%s AND course_id=%s"
        data=(student_id,course_id)
        cursor.execute(sql,data)

        return jsonify("You have unenrolled in this course")
        











       

############For a student to view his/her enrolled courses
@app.route("/my_enrolled_courses",methods=["GET"])
def my_enrolled_courses():
    if request.method=="GET":
        jwt_decoded=request.headers.get('Authorization')
        decoded=jwt.decode(jwt_decoded,secret, algorithms=['HS256'])
        student_id=decoded['student_id']
        

        sql="SELECT* FROM enrolled_courses,courses WHERE student_id=%s AND courses.id=enrolled_courses.course_id"
        data=(student_id)
        cursor.execute(sql,data)
        enrolled_courses=cursor.fetchall()
        return jsonify(enrolled_courses)


####For student to search for his enrolled courses
@app.route("/search_my_enrolled_courses",methods=["POST"])
def search_my_enrolled_courses():
    if request.method=="POST":
        name=request.form["name"]
        jwt_decoded=request.headers.get("Authorization")
        decoded=jwt.decode( jwt_decoded, secret, algorithm=['HS256'])
        student_id=decoded['student_id']

        sql="SELECT* FROM enrolled_courses,courses WHERE courses.id=enrolled_courses.course_id AND enrolled_courses.student_id=%s AND name LIKE %s"
        data=(student_id,"%"+name+"%")
        cursor.execute(sql,data)
        courses=cursor.fetchall()
        return jsonify(courses)




        
#######For student to see videos under his/her enrolled course
@app.route("/view_videos/<int:course_id>",methods=["GET"])
def view_videos(course_id):
    if request.method=="GET":
        sql="SELECT* FROM videos WHERE course_id=%s"
        data=course_id
        cursor.execute(sql,data)
        course_videos=cursor.fetchall()
        return jsonify(course_videos)






        
#######For student to see pdfs under his/her enrolled course
@app.route("/view_pdfs/<int:course_id>",methods=["GET"])
def view_pdfs(course_id):
    if request.method=="GET":
        sql="SELECT* FROM pdfs WHERE course_id=%s ORDER BY created_at DESC"
        data=course_id
        cursor.execute(sql,data)
        course_pdfs=cursor.fetchall()
        return jsonify(course_pdfs)



'''Route for student to take quiz
The questions will be fetched for a course
Here,the questions that will be fetched will 
be limited and randomised.If the student hits
on the take quiz again,another random quiz 
will be fetched from the db
'''

@app.route("/take_quiz/<int:course_id>",methods=["GET"])
def take_quiz(course_id):
    if request.method=="GET":
        sql="SELECT* FROM questions WHERE course_id=%s ORDER BY RAND() LIMIT 15"
        data=course_id
        cursor.execute(sql,data)
        questions=cursor.fetchall()
        questions=list(map(mapper,questions))
        return jsonify(questions)





















########################Instructors api routes######################

##Instructor or teacher signup###
@app.route('/instructor_signup',methods=["POST","GET"])
def instructorsignup():
    if request.method=='POST':
        name=request.json.get('fullname')
        email=request.json.get('email')
        password=request.json.get('password')
        ################Hashing the password
        
        bio=request.json.get("bio")
        sql="SELECT email from instructors WHERE email=%s"
        data=email
        result=cursor.execute(sql,data)
        account=cursor.fetchone()
        
        
        if account:
            return jsonify({"error":"Instructor with email already exists!"})
        else:
            instructor_img="/static/avatar.jpg"
            #coverphoto="/static/graphic-design-3.jpg"
        
             
            sql="INSERT INTO instructors(instructor_name,email,password,instructor_img,bio) VALUES (%s,%s,%s,%s,%s)"
            data=(name,email,password,instructor_img,bio)
            
            cursor.execute(sql,data)
            db.commit()  
            
            return jsonify({"message":"You're successfully registered"})
              
        
                

@app.route('/instructor_login', methods=["POST","GET"])
def instructorlogin():
    if request.method=="POST":
        email=request.json.get('email')
        password=request.json.get('password')
        sql="SELECT* FROM instructors WHERE email=%s AND password=%s"
        data=(email,password)
        cursor.execute(sql,data)
        account=cursor.fetchone()
        
        if account:
            instructor_id=account["id"]  #id in users table=user_id
            email=account["email"]
            payload={
                'instructor_id':instructor_id
                
            }
            instructor_token=jwt.encode(payload,secret)
            return jsonify(instructor_token.decode("UTF-8"))

        else:
            
            return jsonify({"error":"Invalid credentials"})
       








###########Instructor or teacher's profile##########
@app.route('/instructor_profile', methods=['GET'])
def instructor_profile():
    if request.method=="GET":
        jwt_decoded=request.headers.get("Authorization")
        decoded=jwt.decode( jwt_decoded, secret, algorithm=['HS256'])
        instructor_id=decoded['instructor_id']

        sql1="SELECT* FROM instructors WHERE instructors.id=%s"
        data=instructor_id
        cursor.execute(sql1,data)
        profile_info=cursor.fetchall()
        return jsonify({"profile_info":profile_info})




########For instructor to edit his/her profile

@app.route("/instructor_update_profile_img",methods=["PUT","POST"])
def instructor_update_profile_img():
    jwt_decoded=request.headers.get('Authorization')
    decoded=jwt.decode(jwt_decoded,secret, algorithms=['HS256'])
    instructor_id=decoded['instructor_id']
    file=request.files["instructor_img"]
    file.save(os.path.join(app.config["UPLOAD_FOLDER"],secure_filename(file.filename)))
    instructor_img= "/static/"+file.filename 
              
    sql="UPDATE instructors SET instructor_img=%s WHERE instructors.id=%s"
    data=(instructor_img,instructor_id)
    cursor.execute(sql,data)
    db.commit
    return jsonify({"message":"Profile picture updated sucessfully"})








#######For an instructor to edit his/her bio
@app.route("/instructor_update_bio", methods=["POST","GET"])
def instructor_update_bio():
    if request.method=="POST":
        jwt_decoded=request.headers.get('Authorization')
        decoded=jwt.decode(jwt_decoded,secret, algorithms=['HS256'])
        instructor_id=decoded['instructor_id']
        bio=request.get_json('bio')
        
        sql="UPDATE instructors SET bio=%s WHERE id=%s"
        data=(bio,instructor_id)
        cursor.execute(sql,data)
        db.commit()
        return jsonify({"message":"Bio updated sucessfully"})


#####For an instructor to update his/her name
@app.route("/instructor_update_name", methods=["POST","GET"])
def instructor_update_name():
    if request.method=="POST":
        jwt_decoded=request.headers.get('Authorization')
        decoded=jwt.decode(jwt_decoded,secret, algorithms=['HS256'])
        instructor_id=decoded['instructor_id']
        bio=request.get_json('bio')
        
        sql="UPDATE instructors SET instructor_name=%s WHERE id=%s"
        data=(bio,instructor_id)
        cursor.execute(sql,data)
        db.commit()
        return jsonify({"message":"Name updated sucessfully"})
  



    





###############For an instructor to create course
@app.route("/create_course",methods=["POST"])
def create_course():
    if request.method=="POST":
        jwt_decoded=request.headers.get("Authorization")
        decoded=jwt.decode( jwt_decoded, secret, algorithm=['HS256'])
        instructor_id=decoded['instructor_id']

        name=request.form["name"]
        description=request.form["description"]
        level=request.form["level"]


        file=request.files["course_img"]
        file.save(os.path.join(app.config["UPLOAD_FOLDER"],secure_filename(file.filename)))
        course_img= "/static/"+file.filename 
        

        sql="INSERT INTO courses(name,course_img,instructor_id,description,level) VALUES(%s,%s,%s,%s,%s)"
        data=(name,course_img,instructor_id,description,level)
        cursor.execute(sql,data)
        db.commit()
        return jsonify({"message":"Course created sucessfully"})


'''This will fetch instructor's info and display it in message 
after creating a course'''
@app.route("/display",methods=["GET"])
def display():
    if request.method=="GET":
        jwt_decoded=request.headers.get("Authorization")
        decoded=jwt.decode( jwt_decoded, secret, algorithm=['HS256'])
        instructor_id=decoded['instructor_id']

        sql="SELECT instructor_name FROM instructors WHERE id=%s"
        data=instructor_id
        cursor.execute(sql,data)
        info=cursor.fetchall()
        return jsonify(info)








    
#########For instructor to see his or her courses
@app.route("/mycourses",methods=["GET"])
def mycourses():
    if request.method=="GET":
        jwt_decoded=request.headers.get("Authorization")
        decoded=jwt.decode( jwt_decoded, secret, algorithm=['HS256'])
        instructor_id=decoded['instructor_id']

        sql="SELECT* FROM courses WHERE courses.instructor_id=%s ORDER BY created_at DESC"
        data=instructor_id
        cursor.execute(sql,data)
        mycourses=cursor.fetchall()
        return jsonify(mycourses)
        


#####For instructor or teacher to search for courses created by him
@app.route("/search_my_created_courses",methods=["POST"])
def search_my_created_courses():
    if request.method=="POST":
        name=request.form["name"]
        jwt_decoded=request.headers.get("Authorization")
        decoded=jwt.decode( jwt_decoded, secret, algorithm=['HS256'])
        instructor_id=decoded['instructor_id']

        sql="SELECT* FROM courses WHERE instructor_id=%s AND name LIKE %s ORDER BY created_at DESC"
        data=(instructor_id,"%"+name+"%")
        cursor.execute(sql,data)
        courses=cursor.fetchall()
        return jsonify(courses)

        


       


        



'''For an instructor to add a video for his course
Here,we will let instructor add video url from 
youtube because of avoiding server to be overloaded
We could also allow him to upload the video but because 
of avoiding server to be overloaded,we skip by that 
feature
'''
@app.route("/add_video/<int:course_id>",methods=["POST","GET"])
def add_topic(course_id):
    if request.method=="POST":
        title=request.form["title"]
        video_url=request.form["video_url"]
        file=request.files["coverphoto"]
        file.save(os.path.join(app.config["UPLOAD_FOLDER"],secure_filename(file.filename)))
        video_coverphoto= "/static/"+file.filename 
        

       
        sql="INSERT INTO videos(title,course_id,video_url,video_coverphoto) VALUES (%s,%s,%s,%s)"
        data=(title,course_id,video_url,video_coverphoto)
        cursor.execute(sql,data)
        db.commit()
        return jsonify("Video added")
#This below will fetch a course with a given id so that instructor adds a video
    if request.method=="GET":
        sql2="SELECT* FROM courses WHERE courses.id=%s"
        data=course_id
        cursor.execute(sql2,data)
        course=cursor.fetchall()
        return jsonify({"course":course})







#################For an instructor to add a pdf for his course
@app.route("/add_pdf/<int:course_id>",methods=["POST","GET"])
def add_pdf(course_id):
    if request.method=="POST":
        title=request.form["title"]
        file=request.files["pdf"]
        file.save(os.path.join(app.config["UPLOAD_FOLDER"],secure_filename(file.filename)))
        pdf= "/static/"+file.filename 
        
        
        
        


        sql="INSERT INTO pdfs(title,course_id,pdf) VALUES (%s,%s,%s)"
        data=(title,course_id,pdf)
        cursor.execute(sql,data)
        db.commit()
        return jsonify("Pdf added")
        
#This below will fetch a course with a given id so that instructor adds a pdf
    if request.method=="GET":
        sql2="SELECT* FROM courses WHERE courses.id=%s"
        data=course_id
        cursor.execute(sql2,data)
        course=cursor.fetchall()
        return jsonify({"course":course})



















####For an instructor or teacher to add question under a course
@app.route("/add_question/<int:course_id>",methods=["POST","GET"])
def add_question(course_id):
    if request.method=="POST":
        #question_number=request.get_json("question_number")
        question=request.form["question"]
        option_one=request.form["option_one"]
        option_two=request.form["option_two"]
        option_three=request.form["option_three"]
        option_four=request.form["option_four"]
        ####Creating an empty list to later push the values
        options=[]
        
        ##Pushing the values into and empty array
        options.append(option_one)
        options.append(option_two)
        options.append(option_three)
        options.append(option_four)
        ##Changing the array into comma separeted string
        options=','.join(map(str,options))

        correct_answer=request.form["answer"]
        answer_description=request.form["answer_description"]
        sql="INSERT INTO questions(question,options,correct_answer,answer_description,course_id) VALUES(%s,%s,%s,%s,%s)"
        data=(question,options,correct_answer,answer_description,course_id)
        cursor.execute(sql,data)
        db.commit()
        return jsonify("Question added to course")


                
#This below will fetch a course with a given id so that instructor adds a question
    if request.method=="GET":
        sql2="SELECT* FROM courses WHERE courses.id=%s"
        data=course_id
        cursor.execute(sql2,data)
        course=cursor.fetchall()
        return jsonify({"course":course})



#####For teacher or instructor to update course properties

########For instructor to edit course image

@app.route("/update_course_img/<int:course_id>",methods=["PUT","POST"])
def instructor_update_course_img(course_id):
    file=request.files["course_img"]
    file.save(os.path.join(app.config["UPLOAD_FOLDER"],secure_filename(file.filename)))
    course_img= "/static/"+file.filename 
              
    sql="UPDATE courses SET course_img=%s WHERE courses.id=%s"
    data=(course_img,course_id)
    cursor.execute(sql,data)
    db.commit
    return jsonify({"message":"Course Image Updated"})








#######For an instructor to edit name of course
@app.route("/update_course_name/<int:course_id>", methods=["POST","GET"])
def update_course_name(course_id):
    if request.method=="POST":
        
        course_name=request.get_json('course_name')
        
        sql="UPDATE courses SET name=%s WHERE id=%s"
        data=(course_name,course_id)
        cursor.execute(sql,data)
        db.commit()
        return jsonify({"message":"Name of course updated"})


#####For an instructor to update description of course
@app.route("/update_course_description/<int:course_id>", methods=["POST","GET"])
def update_course_description(course_id):
    if request.method=="POST":
       
        course_description=request.get_json('course_description')
        
        sql="UPDATE courses SET description=%s WHERE id=%s"
        data=(course_description,course_id)
        cursor.execute(sql,data)
        db.commit()
        return jsonify({"message":"Description of course updated"})
  


########For reseting of password for student
@app.route("/password_reset",methods=["POST"])
def password_reset():
    if request.method=="POST":
        email=request.get_json("email")
        ####We check to see ifuser  email exists in the database
        sql="SELECT  email FROM students  WHERE email=%s"
        data=email
        cursor.execute(sql,data)
        user=cursor.fetchone()
        
        ##If user exists: we generate a unique token
        if user:
            payload={
                "email":email
            }

            '''token=jwt.encode(payload,secret)
            #We insert the token and email into password_resets table
            sql="INSERT INTO password_resets(email,token) VALUES(%s,%s)"
            data=(email,token)
            cursor.execute(sql,data)
            msg=Message("<h1>Reset your password</h>",
                sender="aljay3334@gmail.com",
                recipients=email
                body="Please click this  link to reset your password",
                mail.send(msg)
                return jsonify("Check your email to get the link to reset your password")
            )'''

            return jsonify({"message":"Check your email to verify your password"})


            

        else:
            return jsonify({"error":"Email does not exist"})


        

         


    















'''was just trying a function below
I'm doing this below so that I don't 
Forget it
'''

'''Here is a function to change 
the comma separeted options part in 
each dictionary into a list 
for all
'''
def  mapper(obj):
    obj["options"]=obj["options"].split(",")
    return obj




@app.route("/change", methods=["GET"])
def change():

    questions=[
    {
        "id":1,
        "question":"Which kkkkkk",
        "options":"Java,Kotlin,Python",
        "correct_answer":"Python",
    },

        {
        "id":2,
        "question":"Which Editor",
        "options":"Atom,VScode,Notepad",
        "correct_answer":"Vscode",
    }
]    
    if request.method=="GET":
        questions=list(map(mapper,questions))
        return jsonify(questions)

'''It worked so I'll use it in the retrieving quiz route'''



  












if __name__=="__main__":
    app.run(debug='true')