using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Like> Likes { get; set; }
        public DbSet<Message> Messages { get; set; }



        // We have add this method to map many to many relationship between tables
        protected override void OnModelCreating(ModelBuilder builder)
        {
            //Many to Many realtion shit with Users and Likes table config
            builder.Entity<Like>()
            .HasKey(k => new { k.LikeeId, k.LikerId });

            builder.Entity<Like>()
            .HasOne(u => u.Likee)
            .WithMany(u => u.Likers)
            .HasForeignKey(u => u.LikeeId)
            .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Like>()
            .HasOne(u => u.Liker)
            .WithMany(u => u.Likees)
            .HasForeignKey(u => u.LikerId)
            .OnDelete(DeleteBehavior.Restrict);

            //Many to Many realtion shit with Users and Messages table config
            builder.Entity<Message>()
            .HasOne(u => u.Sender)
            .WithMany(u => u.MessagesSend)
            .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Message>()
            .HasOne(u => u.Recipient)
            .WithMany(u => u.MessagesReceived)
            .OnDelete(DeleteBehavior.Restrict);
            
        }

    }
}