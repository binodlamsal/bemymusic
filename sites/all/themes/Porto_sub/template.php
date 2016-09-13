<?php
	
function Porto_sub_link(array $variables) {
  
  

  
  global $user;
  $path = $variables['text'];

  
if($path == 'Item') {
    
  // echo "<pre>";
  // print_r($variables);
    if($order = commerce_cart_order_load($user->uid)) {

      // Count the number of product line items on the order.
      $wrapper = entity_metadata_wrapper('commerce_order', $order);
      $quantity = commerce_line_items_quantity($wrapper->commerce_line_items, commerce_product_line_item_types());

      // We're injecting custom HTML into the link text, so if the original
      // link text was not set to allow HTML (the usual case for menu items),
      // we MUST do our own filtering of the original text with check_plain(),
      // then specify that the link text has HTML content.
      if (!isset($variables['options']['html']) || empty($variables['options']['html'])) {
        if($quantity == 0 || $quantity == 1 || $quantity == NULL){
          $variables['text'] =  'Item (' .$quantity. ')';
        }else{
          $variables['text'] =  'Items (' .$quantity. ')';
        }
        
        $variables['options']['html'] = TRUE;
        // $variables['options']['attributes']['class'][] = 'custom-cart';
      }
  }
}
if($path == 'Price') {
  
   
    
  // echo "<pre>";
  // print_r($variables);
    if($order = commerce_cart_order_load($user->uid)) {
      $wrapper = entity_metadata_wrapper('commerce_order', $order);
      $order_total = $wrapper->commerce_order_total->value();
      $total =  commerce_currency_format($order_total['amount'],                  $order_total['currency_code']);            
      // Count the number of product line items on the order.
      //$wrapper = entity_metadata_wrapper('commerce_order', $order);
      //$quantity = commerce_line_items_quantity($wrapper->commerce_line_items, commerce_product_line_item_types());

      // We're injecting custom HTML into the link text, so if the original
      // link text was not set to allow HTML (the usual case for menu items),
      // we MUST do our own filtering of the original text with check_plain(),
      // then specify that the link text has HTML content.
      if (!isset($variables['options']['html']) || empty($variables['options']['html'])) {
        $variables['text'] =  'Price (' .$total. ')';
        $variables['options']['html'] = TRUE;
        // $variables['options']['attributes']['class'][] = 'custom-cart';
      }
  }
}
  // Call core theme_link() with edited elements.
  return theme_link($variables);
}




function Porto_sub_views_pre_render(&$view) {

  /*if ($view->name == 'music_album_features' ) {
    // Here you can do any php you want to get the title you need for your view.
    
      $view->set_title('my new title');
  }*/
}
function Porto_sub_preprocess_page(&$vars) {
    if(arg(0) == 'music'){
      drupal_set_title('Music');
    }
}
?>


