import { Module } from '@nestjs/common';
import { AccountService, CustomerService, DepositService, TransferService } from './business/services';
import { SecurityService } from './business/services/security/security.service';
import { AccountRepository, AccountTypeRepository, CustomerRepository, DepositRepository, TransferRepository } from './data/persistence';
import { AccountController, CustomerController, DepositController, SecurityController, TransferController } from './presentation/controllers';


@Module({
  imports: [],
  controllers: [
    SecurityController,
    CustomerController,
    DepositController,
    AccountController,
    TransferController
  ],
  providers: [
    AccountService,
    AccountRepository,
    DepositService,
    CustomerRepository,
    CustomerService,
    TransferRepository,
    TransferService,
    AccountTypeRepository,
    SecurityService,
    DepositRepository
  ],
})
export class AppModule { }
