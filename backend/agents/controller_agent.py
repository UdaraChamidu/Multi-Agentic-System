from .task_agent import TaskAgent
from .data_agent import DataAgent
from .logging_agent import LoggingAgent

class ControllerAgent:
    def __init__(self):
        self.task_agent = TaskAgent()
        self.data_agent = DataAgent()
        self.logger = LoggingAgent()

    def status(self):
        return "Controller Agent is active"

    def handle_task(self, task: dict):
        self.logger.log(f"Received task: {task}")
        data = self.data_agent.fetch_data(task)
        result = self.task_agent.execute(task, data)
        return result
