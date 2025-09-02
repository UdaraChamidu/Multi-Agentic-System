from fastapi import APIRouter
from app.agents.controller_agent import ControllerAgent

router = APIRouter()
controller = ControllerAgent()

@router.get("/status")
async def get_status():
    return {"status": controller.status()}

@router.post("/task")
async def create_task(task: dict):
    result = controller.handle_task(task)
    return {"result": result}

# New analytics endpoint
@router.get("/analytics")
async def get_analytics():
    return controller.get_analytics()
