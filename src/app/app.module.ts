import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DialogflowService } from './services';
import { MessageListComponent, MessageFormComponent, MessageItemComponent } from './components';
import { SafeHtmlPipe } from './safe-html.pipe';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageFormComponent,
    MessageItemComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoggerModule.forRoot({
      serverLoggingUrl: 'https://jxksctq2n8.execute-api.us-east-1.amazonaws.com/prod/my_logger',
      level: NgxLoggerLevel.LOG, serverLogLevel: NgxLoggerLevel.LOG
    })
  ],
  providers: [
    DialogflowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
