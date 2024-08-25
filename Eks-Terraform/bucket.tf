resource "aws_s3_bucket" "sb" {
bucket = "manoj.tertis.game2024"
}
resource "aws_s3_bucket_ownership_controls" "oc" {
 bucket = aws_s3_bucket.sb.id
 rule {
 object_ownership = "BucketOwnerPreferred"
 }
}
resource "aws_s3_bucket_acl" "acl" {
bucket = aws_s3_bucket.sb.id
depends_on = [aws_s3_bucket_ownership_controls.oc]
acl = "private"
}
resource "aws_s3_bucket_versioning" "vc" {
bucket = aws_s3_bucket.sb.id 
versioning_configuration {
status = "Enabled" 
 }
}

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

