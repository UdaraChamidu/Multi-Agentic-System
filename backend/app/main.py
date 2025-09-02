from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import agent_routes

app = FastAPI(title="Multi-Agent System API")

# CORS settings: allow frontend to access backend
origins = [
    "http://localhost:5173",  # React dev server
    # Add other allowed origins if needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include agent routes
app.include_router(agent_routes.router, prefix="/api/agents")

@app.get("/")
async def root():
    return {"message": "Multi-Agent System Backend is running"}
