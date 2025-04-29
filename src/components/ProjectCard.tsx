type ProjectCardProps = {
    title: string
    description: string
    image: string
  }
  
  function ProjectCard({ title, description, image }: ProjectCardProps) {
    return (
      <div className="project-card" style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
        <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>{title}</h3>
        <p>{description}</p>
      </div>
    )
  }
  
  export default ProjectCard

  