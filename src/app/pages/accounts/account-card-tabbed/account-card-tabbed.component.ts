import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {CustomerCreateUpdateComponent} from '../../tables/all-in-one-table/customer-create-update/customer-create-update.component';
import {Customer} from '../../tables/all-in-one-table/customer-create-update/customer.model';
import {filter} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import {ALL_IN_ONE_TABLE_DEMO_DATA} from '../../tables/all-in-one-table/all-in-one-table.demo';
import {Observable, of, ReplaySubject} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {ListColumn} from '../../../../@fury/shared/list/list-column.model';

@Component({
  selector: 'fury-account-card-tabbed',
  templateUrl: './account-card-tabbed.component.html',
  styleUrls: ['./account-card-tabbed.component.scss']
})
export class AccountCardTabbedComponent implements OnInit, AfterViewInit {

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<Customer[]> = new ReplaySubject<Customer[]>(1);
  data$: Observable<Customer[]> = this.subject$.asObservable();
  customers: Customer[];

  @Input()
  columns: ListColumn[] = [
    { name: 'Checkbox', property: 'checkbox', visible: false },
    // { name: "Image", property: "image", visible: true },
    {
      name: 'Account No',
      property: 'name',
      visible: false,
      isModelProperty: true,
    },
    {
      name: 'Account No',
      property: 'firstName',
      visible: true,
      isModelProperty: true,
    },
    {
      name: 'Currency',
      property: 'lastName',
      visible: true,
      isModelProperty: true,
    },
    {
      name: 'Amount',
      property: 'street',
      visible: true,
      isModelProperty: true,
    },
    { name: 'Date', property: 'mail', visible: true, isModelProperty: true },
    {
      name: 'Trans Ref',
      property: 'city',
      visible: true,
      isModelProperty: true,
    },
    // { name: 'Phone', property: 'phoneNumber', visible: true, isModelProperty: true },
    { name: 'Actions', property: 'actions', visible: false },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<Customer> | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dialog: MatDialog) {}

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  /**
   * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
   * We are simulating this request here.
   */
  getData() {
    return of(
      ALL_IN_ONE_TABLE_DEMO_DATA.map((customer) => new Customer(customer))
    );
  }

  ngOnInit() {
    this.getData().subscribe((customers) => {
      this.subject$.next(customers);
    });

    this.dataSource = new MatTableDataSource();

    this.data$.pipe(filter((data) => !!data)).subscribe((customers) => {
      this.customers = customers;
      this.dataSource.data = customers;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createCustomer() {
    this.dialog
      .open(CustomerCreateUpdateComponent)
      .afterClosed()
      .subscribe((customer: Customer) => {
        /**
         * Customer is the updated customer (if the user pressed Save - otherwise it's null)
         */
        if (customer) {
          /**
           * Here we are updating our local array.
           * You would probably make an HTTP request here.
           */
          this.customers.unshift(new Customer(customer));
          this.subject$.next(this.customers);
        }
      });
  }

  updateCustomer(customer) {
    this.dialog
      .open(CustomerCreateUpdateComponent, {
        data: customer,
      })
      .afterClosed()
      .subscribe((customer) => {
        /**
         * Customer is the updated customer (if the user pressed Save - otherwise it's null)
         */
        if (customer) {
          /**
           * Here we are updating our local array.
           * You would probably make an HTTP request here.
           */
          const index = this.customers.findIndex(
            (existingCustomer) => existingCustomer.id === customer.id
          );
          this.customers[index] = new Customer(customer);
          this.subject$.next(this.customers);
        }
      });
  }

  deleteCustomer(customer) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
    this.customers.splice(
      this.customers.findIndex(
        (existingCustomer) => existingCustomer.id === customer.id
      ),
      1
    );
    this.subject$.next(this.customers);
  }

  onFilterChange(value) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

}
