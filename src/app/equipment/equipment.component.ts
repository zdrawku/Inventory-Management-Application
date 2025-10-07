import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_CARD_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxAvatarComponent, IgxIconComponent } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-equipment',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxIconComponent, IgxAvatarComponent, FormsModule],
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent {
  public value?: string;
}
