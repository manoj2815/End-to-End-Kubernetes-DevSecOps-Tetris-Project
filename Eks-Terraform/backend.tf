terraform {
  backend "s3" {
    bucket         = "manoj.tertis.game2024"
    region         = "ap-south-1"
    key            = "End-to-End-Kubernetes-DevSecOps-Tetris-Project/Eks-Terraform/terraform.tfstate"
  }
  required_version = ">=0.13.0"
  required_providers {
    aws = {
      version = ">= 2.7.0"
      source  = "hashicorp/aws"
    }
  }
}
