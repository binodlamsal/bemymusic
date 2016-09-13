<?php

/**
 * @return mixed
 * Settings form for bemy module.
 */
function bemy_admin()
{

//Custom fields for configuration of custom module

    $form['bemybannerinfo'] = array(
        '#type' => 'fieldset',
        '#title' => t('Banner Images for bemy'),
        '#attached' => array(
          'library' => array(
            array('system', 'drupal.collapse'),
          ),
        ),
        '#attributes' => array(
          'class' => array('collapsible', 'collapsed')
        ),
    );

    $form['bemybannerinfo']['music_image'] = array(
        '#type' => 'managed_file',
        '#id' => 'file1',
        '#title' => t('Please add music page banner image.'),
        '#default_value' =>variable_get('music_image_fid',''),
        '#required' => FALSE,
        '#description' => t(""),
        '#upload_validators' => array('file_validate_extensions' => array('gif png jpg jpeg')),
        '#upload_location' => 'public://banner/',
    );

    $form['bemybannerinfo']['merch_image'] = array(
        '#type' => 'managed_file',
        '#id' => 'file2',
        '#title' => t('Please add merch page banner image.'),
        '#default_value' =>variable_get('merch_image_fid',''),
        '#required' => FALSE,
        '#description' => t(""),
        '#upload_validators' => array('file_validate_extensions' => array('gif png jpg jpeg')),
        '#upload_location' => 'public://banner/',
    );

    $form['bemybannerinfo']['artist_image'] = array(
        '#type' => 'managed_file',
        '#id' => 'file3',
        '#title' => t('Please add artist page banner image.'),
        '#default_value' =>variable_get('artist_image_fid',''),
        '#required' => FALSE,
        '#description' => t(""),
        '#upload_validators' => array('file_validate_extensions' => array('gif png jpg jpeg')),
        '#upload_location' => 'public://banner/',
    );

    /*$form['bemybannerinfo']['artist_inner_image'] = array(
        '#type' => 'managed_file',
        '#id' => 'file4',
        '#title' => t('Please add artist inner page banner image.'),
        '#default_value' =>variable_get('artist_inner_image_fid',''),
        '#required' => FALSE,
        '#description' => t(""),
        '#upload_validators' => array('file_validate_extensions' => array('gif png jpg jpeg')),
        '#upload_location' => 'public://banner/',
    );*/

    // Perform our custom submit before system submit
    $form['#submit'][] = 'bemy_admin_submit';
    $form = system_settings_form($form);
    return $form;

}

/**
 * @param $form
 * @param $form_state
 * Function to validate settings page data
 */
function bemy_admin_validate($form, &$form_state)
{

}

/**
 * Form submit handler.
 */
function bemy_admin_submit($form, &$form_state)
{
    file_save_permanent($form_state,'music_image','music_image_fid');
    file_save_permanent($form_state,'merch_image','merch_image_fid');
    file_save_permanent($form_state,'artist_image','artist_image_fid');
    //file_save_permanent($form_state,'artist_inner_image','artist_inner_image_fid');
}

function file_save_permanent($form_state,$name_key,$name_key_fid){
    global $user;
    if (is_numeric($form_state['values'][$name_key]) && !empty($form_state['values'][$name_key])) {
     // Load the file via file.fid.
     $file = file_load($form_state['values'][$name_key]);
     if ($file) {
       // Change status to permanent.
       $file->status = FILE_STATUS_PERMANENT;
       // Save.
       file_save($file);
       // Save file to variable.
       variable_set($name_key_fid, $file->fid);
       // Record that the module (in this example, user module) is using the file.
       file_usage_add($file, 'user','user',$user->uid);
       // Unset formstate value.
       unset($form_state['values'][$name_key]);//make sure it is unset before system submit
     }
   }
   else {
     // Delete file
     variable_set($name_key_fid,'');
   }
}

