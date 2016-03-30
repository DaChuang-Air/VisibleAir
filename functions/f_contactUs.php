<?php

function get_contactUs(){
	return '
<div class="page-container" >
    <div class="main-content">
              <div class="page-title">
        
        <div class="title-env">
              <h3>Tel:&nbsp;12345678  &nbsp;&nbsp;&nbsp;&nbsp;    e-mail:&nbsp;429027871@qq.com</h3>
        </div>
      </div>
      <div class="row">
           <div class="col-sm-9 mailbox-right">  
            <div class="mail-compose">
              <form action="sendmail.php" method="post" role="form">
                <!-- Header Title and Button Options -->
                <div class="mail-header">
                  <div class="row">
                    <div class="col-sm-6">              
                      <h3>
                        <i class="linecons-pencil"></i>
                        联系我们
                      </h3>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="to">To:</label>
                  <input type="text" name="toemail" class="form-control" id="to" tabindex="1" />
                </div>
                
                <div class="form-group">
                  <label for="subject">Subject:</label>
                  <input type="text" name="title" class="form-control" id="subject" tabindex="1" />
                </div>
                <div class="compose-message-editor">
                  <textarea name="content" class="form-control wysihtml5" data-html="false" data-color="false" data-stylesheet-url="assets/css/wysihtml5-color.css" name="sample_wysiwyg" id="sample_wysiwyg"></textarea>
                </div>
                <div class="row">
                  <div class="col-sm-3">
                    <button type="submit" class="btn btn-secondary btn-block btn-icon btn-icon-standalone">
                      <i class="linecons-mail"></i>
                      <span>Send</span>
                    </button>
                  </div>
                    <div class="col-sm-3 col-xs-5">
                      <button type="button" class="btn btn-secondary btn-single btn-icon btn-icon-standalone btn-icon-standalone-right btn-block">
                        <i class="linecons-fire"></i>
                        <span>Delete</span>
                      </button>
                    </div>
                </div>
              </form>
            </div>
          </div>  
      </div>
      <footer class="main-footer sticky footer-type-1">
        
        <div class="footer-inner">
        
          <!-- Add your copyright text here -->
          <div class="footer-text">
            © 2015
          </div>
          <!-- Go to Top Link, just add rel="go-top" to any link to add this functionality -->
          <div class="go-up">
            <a href="#" rel="go-top">
              <i class="fa-angle-up"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
        
  </div>
	';
}

?>