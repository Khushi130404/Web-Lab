<?php
    $run = (int)$_GET["run"];
    $over = (float)$_GET["over"] + 0.1; 
    $decimal = fmod($over, 1);
    
    if ($decimal >= 0.6) {
        $over = floor($over) + 1; 
    } else {
        $over = number_format($over, 1); 
    }
    $wk = array(0,0,0,1,0,1,0,0,0,0,0);
    $wicket = (int)$_GET["wicket"] + $wk[rand(0, 6)];
    if ($wicket == (int)$_GET["wicket"]) {
        $run += rand(0, 10); 
    }
    $score = array("run" => $run, "over" => $over, "wicket" => $wicket);
    echo json_encode($score);
?>
