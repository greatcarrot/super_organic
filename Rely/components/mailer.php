<?php

$bbxContactFormRecipient = 'your.mail.here@gmail.com';

function bbxSendMail($sendTo='') {
    $fields = $_POST['contact_form'];
	$headers = 'From:';
	if ($fields['name']) $headers .= ' ' . $fields['name'];
	$headers .= ' <' . $fields['email'] . '>' . "\r\n" . 'Reply-to: ' . $fields['email'];
	
	$body = 'From: ' . $fields['name'] . "\n\n" . 'Email: ' . $fields['email'] . "\n\n" . 'Message: ' . $fields['message'];

    $subject = 'Contact form request';

	return mail($sendTo, $subject, $body, $headers);
}

function bbxValidateMail() {
    $fields = $_POST['contact_form'];
    if (!isset($fields['name']) || !isset($fields['email']) || !isset($fields['message'])) {
        return false;
    }
    if (!$fields['name'] || !$fields['email'] || !$fields['message']) {
        return false;
    }
    
    return true;
}

if (isset($_POST['contact_form'])) {
    if (bbxValidateMail()) {
        if (bbxSendMail($bbxContactFormRecipient)) {
            echo json_encode(array('msg' => 'Email successfully sent.', 'success' => true));
        } else {
            echo json_encode(array('msg' => 'There was an error sending the email. Please try again later.', 'success' => false));
        }
    } else {
        echo json_encode(array('msg' => 'Please fill in all required fields.', 'success' => false));
    }

} else {
    echo json_encode(array('msg' => 'Please fill in all required fields.', 'success' => false));
}


?>