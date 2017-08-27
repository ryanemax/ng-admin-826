import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 引入标签组件
import { DiyButtonComponent } from './diy-button/diy-button.component';

// 引入管道
import { SexNamePipe } from './sex-name.pipe';
import { CurrencyFormatPipe } from './currency/currency-format/currency-format.pipe';

// 引入指令
import { HighlightDirective } from './highlight.directive';
import { ButtonCircleDirective } from './button-circle.directive';
import { CurrencyHighlightDirective } from './currency/currency-highlight/currency-highlight.directive';

// 引入自定义主键
import { HanshengBookButtonComponent } from './hansheng-book-button/hansheng-book-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DiyButtonComponent,
    HanshengBookButtonComponent,
    SexNamePipe,
    CurrencyFormatPipe,
    HighlightDirective,
    ButtonCircleDirective,
    CurrencyHighlightDirective
  ],
  exports: [
    DiyButtonComponent,
    SexNamePipe,
    CurrencyFormatPipe,
    HanshengBookButtonComponent,
    HighlightDirective,
    ButtonCircleDirective,
    CurrencyHighlightDirective
  ]
})
export class SharedModule { }
