<?php
    date_default_timezone_set('Asia/Kolkata');
    $time = array(date('H'),date('i'),date('s'));
    echo json_encode($time);
?>