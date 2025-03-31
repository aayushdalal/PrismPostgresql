// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

//AS YOU ARE WROKING WITH JS SO REQUIRE THEM NOT IMPORT THEM
let { PrismaClient } =require('@prisma/client');

const prisma = new PrismaClient()//now this prisma is our client on it we can see all of our models(tables)

// write prisma. and you can see all the modesl in your schema, post ,user both
// prisma.user.create();
// prisma.user.delete();

async function insertUser(name,email){
    //now all db operation accepts the object in the argument so pass object in {} here and also they take some time so must use await and await with asyn function
   await prisma.user.create({
    data:{
        name,
        email
    }
   })
}
// insertUser('aayush',"aayush123@gmail.com")
//after inserting this once .comment this command as we dont want multiple same inseritons
async function insertPost(){
    //now all db operation accepts the object in the argument so pass object in {} here and also they take some time so must use await and await with asyn function
   await prisma.post.create({
    data:{
        title:"play badminton",
        content:"play badminton nicley and smash and win",
        author:{
            connect:{
                id:1
            }
        }
    }
   })
}
// insertPost()

//to read the user or post entry 
async function getUser(){
    //now all db operation accepts the object in the argument so pass object in {} here and also they take some time so must use await and await with asyn function
   let users=await prisma.user.findMany({})
   console.log(users);
   let users2=await prisma.user.findUnique({
    where:{
        id:1
    },
    //to also see the post of this user then follow tjis suntax
    include:{
        posts:true
    }
   })
   console.log(users2);
   
}
getUser();

async function UpdatePost(id,content){
    //now all db operation accepts the object in the argument so pass object in {} here and also they take some time so must use await and await with asyn function
   let users=await prisma.post.update({
    where:{
        //yes by defualt it will find this id
        id
    },
    data:{
        content,
        pusblished:true
    }

   })
}
UpdatePost(1,'mai hu badmash player');
