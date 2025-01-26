# Vagrantfile
Vagrant.configure("2") do |config|
  
    # Balanceador de carga
    config.vm.define "load-balancer" do |lb|
      lb.vm.box = "ubuntu/bionic64"
      lb.vm.network "private_network", ip: "192.168.56.10"
      lb.vm.hostname = "load-balancer"
      lb.vm.provision "ansible" do |ansible|
          ansible.compatibility_mode = "2.0"
        ansible.playbook = "playbooks/load_balancer.yml"
      end
    end
  
    # Servidor frontend
    config.vm.define "frontend" do |fe|
      fe.vm.box = "ubuntu/bionic64"
      fe.vm.network "private_network", ip: "192.168.56.11"
      fe.vm.hostname = "frontend"
    end
  
    # Servidor backend
    config.vm.define "backend" do |be|
      be.vm.box = "ubuntu/bionic64"
      be.vm.network "private_network", ip: "192.168.56.12"
      be.vm.hostname = "backend"
    end
  
    # Servidor de base de datos
    config.vm.define "database" do |db|
      db.vm.box = "ubuntu/bionic64"
      db.vm.network "private_network", ip: "192.168.56.13"
      db.vm.hostname = "database"
    end
  end
  