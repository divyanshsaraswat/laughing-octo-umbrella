import os

# Here is an exposed AWS Access Key
AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE"

# This is just a high entropy string, but not genuinely a secret (base64)
# We expect the regex to flag it due to entropy, but the ML model to eventually learn to ignore it.
random_b64_data = "V2hpY2ggb25lIG9mIHRoZXNlIGlzIHJlYWw/Cg=="

def initialize_aws_client():
    secret_token = os.environ.get("SECRET_KEY", "default_secret_placeholder")
    print(f"Connecting with {AWS_ACCESS_KEY_ID}")
