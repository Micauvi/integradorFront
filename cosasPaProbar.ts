saveNewuser() {
    delete this.user.created_at;
    delete this.user.id;
    this.userService.saveuser(this.user)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/users']);
        },
        err => console.error(err)
      )
//adentro del constructor
private userService: CompanyService, private router: Router, private activedRouter: ActivatedRoute
