prisma is an orm which works with both nosql and sql databases . it is preferably used for sql, now we just made postgress datbaase todo list project using native sql, now we will use prisma orm and we need not to write native sql now
Prisma helps us migration it reduces the load on us and 
YOU CAN WRITE JOIN QUERY ON ALL ELEMENTS OF TODOS AND EMAIL FROM USERS table in love db: 
               Select todos.* , users.email FROM todos LEFT JOIN users ON users.id=user_id;

Prisma is mainly used for the biggest advantage of migration that is when we change the attributes , columns, schema so updating the schema then we need to do migration, and prisma automatically does migration for us 

to install prisma , first intialise a backend project npm init -y  
     after that run command: read documenatation of prisma in getting started you have sqllite wrtiien in place of postgressql so remove sqllite and write postgresql as we are wroking on postgresql
     npx prisma init --datasource-provider postgresql

now after you installed prisma first change the database url in env file , see the localhost , port username ,db name ,username are all same as of yorus or not, change mydb to livetodos, now this is our db name and also username is given as john does change it to postgres then change the password to your password , now it is by default schema = public so in local host we always keep it public only

we dont need to create database too just run belwo command

IN Documenatation you can see after making the modesl that is completuitng the second step you need to run the thrid step of migration to create your database tables with prisma migrate:
                npx prisma migrate dev --name init
    what this command does is the changes we did in table corresponding to those tables changes it cahnges our schema automatically so we dont need to alter the table manually by running sql commands alter table
 
now it will automatically make the models(tables) in your db which you wrote in the schema.prisma

   VERYYYY IMPORTANT  IF YOU KEEP THE NAME OF YOUR TABLE STARTING WIHT CAPITAL LETTEER THEN WHEN ACCESSING THOSE TABLES YOU NEED TO PASS THEM IN STRINGS: \d "User"     like this

Now to isnert data into our table we need to make auto genreated clients, that is we dont direclty access tables we make classes of tables just like mongodb turend model into classes by mongoose so we will make clients for tables to do enteries

therefore all steps are: 
                        1. change dburl and schema.prisma file add models 
                        2. run the migration command
                        3. create auto generated clients, means convert tables to classses and use them  run command:
                                          npx prisma generate
                        4. once we have clients we can write qurires in them 
                        5. run the two commands you can see them in documentation of 4th point in getting started , explore how to send quereis to your database with prisma cleint
                                          import { PrismaClient } from '@prisma/client'
                                          const prisma = new PrismaClient()
                                BUT TAKE CARE AS YOU ARE WOKRING WITH JS THEREFOER YOU CANT IMPORT . IMPORT IS FOR TS, FOR JS YOU NEED TO REQUIRE IT BUDDY

                *VERY IMPORTANT  WHENVER YOU CHANGE THE TABLE NAME OR THE SCHEMA IN IT DONT FORGET TO RUN THE MIGRATION COMMAND AGAIN IN THE PROJECT by: npx prisma migrate dev --name init.

                *AND after doing migration again run command for genreating client:  npx prisma generate

                               6.now to see our enteris our tuples, we dont need to run sql query we can just run the command in terminal, see command from prism.io/docs/ tools /prisma studio run the command:
                                    npx primsa studio

                               7. after running this command you cann se whole of your db in the lcoalhost db its like a gui and now you dont need to open psql terminal agiain and again :)
