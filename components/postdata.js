
//Data
const blogdata = [
    {
        id : 1,
        image : "https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        title : "Hey Title1",
        content : "Hey Content1"
    },
    {
        id : 2,
        image : "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",  
        title : "Hey Title2",
        content : "Hey Content2"
    }
];

// Utility Functions
export function getBlogs(){
    return blogdata;
}

export function getBlogByID(id){
    return blogdata.find((post) => post.id === id);
}

export function addBlog(blog){
    blog.id = blogdata[blogdata.length - 1].id + 1;
    blogdata.push(blog);
}

export function editBlog(id, newblog){
    const blogIndex = blogdata.findIndex((post) => post.id === id);
    console.log(blogIndex);
    blogdata[blogIndex].id = id;
    blogdata[blogIndex].image=newblog.image;
    blogdata[blogIndex].title=newblog.title;
    blogdata[blogIndex].content=newblog.content;

}

export function deleteBlog(id){
    const blogIndex = blogdata.findIndex((post) => post.id === id);
    blogdata.splice(blogIndex,1);
}

export default blogdata;


/* Image Links:
const image1 = "https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
const image2 = "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

<label>Blog ID</label>
        <input name="id" value={blog.id || ""} onChange={handleChange} className="addBlogInput" type="text" placeholder="Blog ID" />
*/