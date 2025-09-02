import os

# Example configurations
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./multi_agent.db")
LOG_LEVEL = os.getenv("LOG_LEVEL", "INFO")
