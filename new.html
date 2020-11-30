<?php
session_start();
if ( $_SESSION['uname']==true) {
  
}else
header('location:Admin_login.php');
$page='category';
include('include_Structure.php');

?>
    <div style=" width: 70%; margin-left: 25%; margin-top:5%">
        <form action="Addcategories.php" method="post" name="categoryform" onsubmit=" return validateform() ">
            <h1>Add Categories</h1>
            <hr>
            <div class="form-group">
                <label> Category:</label>
                <input type="text" placeholder="Enter Category Name " name="category" class="form-control">
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea class="form-control" placeholder="Enter Category Description" rows="5" name="description" id="comment"></textarea>
            </div>
            <input type="submit" name="submit" class="btn btn-primary" value="Add Category">
        </form>
        <script>
            function validateform() {
                var x = document.forms['categoryform']['category'].value;
                if (x == "") {
                    alert('Category Must Be Filled Out !');
                    return false;
                }
            }
        </script>
    </div>
    <?php
include('connection.php'); 
if (isset($_POST['submit'])) {   
    $category_name=$_POST['category'];
    $description=$_POST['description'];
    $query = mysqli_query($connection,"select * from category where CategoryName='$category_name' ");
    if (mysqli_num_rows($query)>0) {
        echo "<script> alert('Category Name Already Be taken !!')</script>";
    exit();
    }
    $query=mysqli_query($connection,"insert into category(CategoryName,Description)values('$category_name','$description')");
    if($query){
        echo "<script> alert('Category Add Successfully')</script>";
    }else{
        echo "<script> alert('Please try Again')</script>";
    }
 }
?>