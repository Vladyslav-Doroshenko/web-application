using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

public class PostService
{
    private readonly ApplicationDbContext _context;

    public PostService(ApplicationDbContext context)
    {
        _context = context;
    }

    // Get all posts
    public async Task<List<Post>> GetAllPostsAsync()
    {
        return await _context.Posts.Include(p => p.Category).ToListAsync();
    }

    // Get post by Id
    public async Task<Post?> GetPostByIdAsync(int id)
    {
        return await _context.Posts.Include(p => p.Category).FirstOrDefaultAsync(p => p.Id == id);
    }

    // Create a new post (without saving changes)
    public async Task<Post> AddPost(PostEditDto model)
    {
        var categoryRef = await _context.Categories.Include(c => c.Posts).FirstOrDefaultAsync(c => c.Id == model.CategoryId);

        if (categoryRef == null)
        {
            throw new Exception("Category not found");
        }

        var post = new Post
        {
            Name = model.Name,
            Description = model.Description,
            CategoryId = model.CategoryId,
        };

        _context.Posts.Add(post);
        return post;
    }

    // Update a post (without saving changes)
    public Post UpdatePost(PostEditDto post)
    {
        var existingPost = _context.Posts.Find(post.Id);
        if (existingPost == null)
        {
            throw new Exception("Post not found");
        }

        existingPost.Name = post.Name;
        existingPost.Description = post.Description;
        existingPost.CategoryId = post.CategoryId;

        return existingPost;
    }

    // Delete a post (without saving changes)
    public bool DeletePost(int id)
    {
        var post = _context.Posts.Find(id);
        if (post == null)
        {
            throw new Exception("Post not found");
        }

        _context.Posts.Remove(post);
        return true;
    }
}
