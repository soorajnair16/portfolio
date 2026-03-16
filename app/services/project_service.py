from sqlalchemy.orm import Session
from app.models.project import Project


def create_project(db: Session, project):
    new_project = Project(**project.dict())
    db.add(new_project)
    db.commit()
    db.refresh(new_project)
    return new_project


def get_projects(db: Session):
    return db.query(Project).all()