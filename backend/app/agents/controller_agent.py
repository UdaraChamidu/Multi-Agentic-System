from .task_agent import TaskAgent
from .data_agent import DataAgent
from .logging_agent import LoggingAgent
from datetime import datetime

class ControllerAgent:
    def __init__(self):
        self.task_agent = TaskAgent()
        self.data_agent = DataAgent()
        self.logger = LoggingAgent()
        self.task_history = []  # Store executed tasks for analytics

    def status(self):
        return "Controller Agent is active"

    def handle_task(self, task: dict):
        self.logger.log(f"Received task: {task}")
        data = self.data_agent.fetch_data(task)
        result = self.task_agent.execute(task, data)
        # Save task to history
        self.task_history.append({
            "task": task,
            "result": result,
            "timestamp": datetime.utcnow().isoformat()
        })
        return result

    def get_analytics(self):
        total_tasks = len(self.task_history)
        last_task = self.task_history[-1] if self.task_history else None
        return {
            "total_tasks": total_tasks,
            "last_task": last_task
        }
