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

