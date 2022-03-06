import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-superhero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.scss'],
})
export class SuperheroComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ['alias', 'firstname', 'surname'];
  
  form!: FormGroup;

  constructor(private api: ApiService, private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.api.getAll().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
    });
    this.setFormGroup();
  }

  setFormGroup(){
    this.form = this.formBuilder.group({
      alias: [null, Validators.required],
      firstname: [null, Validators.required],
      surname: [null, Validators.required]
    });
  }
  onSubmit(){
    //console.log(this.form);
    //console.log(this.form.value);
    
    this.form.reset();
    //console.log(this.form.value)
  }

  get position(): FormControl{
    return this.form.get('position') as FormControl;
  }
  get name(): FormControl{
    return this.form.get('name') as FormControl;
  }
  get weight(): FormControl{
    return this.form.get('weight') as FormControl;
  }
  get symbol(): FormControl{
    return this.form.get('symbol') as FormControl;
  }
}
