from fastapi import FastAPI
from app.database import Base, engine
from app.routers import project_router
from app.models import project

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Portfolio API")

app.include_router(project_router.router)

@app.get("/")
def root():
    return {"message": "Portfolio backend running"}