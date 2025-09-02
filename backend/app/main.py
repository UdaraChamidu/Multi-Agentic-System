from fastapi import FastAPI
from app.routes import agent_routes

app = FastAPI(title="Multi-Agent System API")

# Include agent routes
app.include_router(agent_routes.router, prefix="/api/agents")

@app.get("/")
async def root():
    return {"message": "Multi-Agent System Backend is running"}
