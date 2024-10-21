<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents('php://input'), true);

$dbName = $data['dbName'];
$username = $data['username'];
$password = $data['password'];
$host = $data['host'];

try {
    // هنا يمكنك استخدام مكتبة PDO لإجراء اتصال بقاعدة البيانات
    $dsn = "pgsql:host=$host;dbname=$dbName;user=$username;password=$password";
    $dbh = new PDO($dsn);

    // إذا كان الاتصال ناجحًا
    echo json_encode(['message' => 'تم إنشاء قاعدة البيانات بنجاح']);
} catch (PDOException $e) {
    echo json_encode(['error' => 'خطأ في الاتصال بقاعدة البيانات: ' . $e->getMessage()]);
}
?>
