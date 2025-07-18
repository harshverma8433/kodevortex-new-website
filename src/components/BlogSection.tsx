import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import blog1 from '@/assets/blog-1.jpg';
import blog2 from '@/assets/blog-2.jpg';
import blog3 from '@/assets/blog-3.jpg';

const BlogCard = ({ blog, index }: { blog: any; index: number }) => {
  return (
    <article
      className="group relative bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
            {blog.category}
          </span>
        </div>

        {/* Read Time */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center space-x-1 bg-background/80 px-2 py-1 rounded-full">
            <Clock className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{blog.readTime}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex  flex-col justify-between ">
       <div>
        <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {blog.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {blog.excerpt}
        </p>
       </div>

        {/* Blog Meta */}
        <div className="flex items-end text-end  text-xs text-muted-foreground mb-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <User className="w-3 h-3" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-3 h-3" />
              <span>{blog.date}</span>
            </div>
          </div>
        </div>



      </div>
    </article>
  );
};

const BlogSection = () => {
  const blogs = [
    {
      title: 'The Future of AI in Software Development: Trends to Watch',
      excerpt:
        'Explore how artificial intelligence is revolutionizing the way we write code, test applications, and deploy software solutions in 2024.',
      image: blog1,
      category: 'Artificial Intelligence',
      author: 'Dr. Alex Rivera',
      date: 'Jan 15, 2024',
      readTime: '5 min',
      tags: ['AI', 'Development', 'Future Tech'],
    },
    {
      title: 'Building Secure Applications: Essential Cybersecurity Practices',
      excerpt:
        'Learn the fundamental security principles every developer should know to build robust and secure applications.',
      image: blog2,
      category: 'Cybersecurity',
      author: 'Sarah Chen',
      date: 'Jan 12, 2024',
      readTime: '7 min',
      tags: ['Security', 'Best Practices', 'Development'],
    },
    {
      title: 'Cloud Migration Strategies for Modern Enterprises',
      excerpt:
        'A comprehensive guide to successfully migrating your infrastructure to the cloud with minimal downtime and maximum efficiency.',
      image: blog3,
      category: 'Cloud Computing',
      author: 'Marcus Johnson',
      date: 'Jan 10, 2024',
      readTime: '8 min',
      tags: ['Cloud', 'DevOps', 'Enterprise'],
    },
  ];

  return (
    <section className="py-8 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Read Our <span className="gradient-text">Blogs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and insights
            from the world of technology and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.title} blog={blog} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="btn-primary group">
            <span>View More Articles</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;