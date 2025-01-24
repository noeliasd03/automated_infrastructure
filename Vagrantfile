# Vagrantfile
Vagrant.configure("2") do |config|
    # Balanceador de carga
    config.vm.define "load_balancer" do |lb|
      lb.vm.box = "ubuntu/bionic64"
      lb.vm.network "private_network", ip: "192.168.33.10"
      lb.vm.hostname = "load_balancer"
      lb.vm.provision "ansible" do |ansible|
        ansible.playbook = "provisioning/load_balancer.yml"
      end
    end
  
    # Servidor frontend
    config.vm.define "frontend" do |frontend|
      frontend.vm.box = "ubuntu/bionic64"
      frontend.vm.network "private_network", ip: "192.168.33.11"
      frontend.vm.hostname = "frontend"
      frontend.vm.provision "ansible" do |ansible|
        ansible.playbook = "provisioning/frontend.yml"
      end
    end
  
    # Servidor backend
    config.vm.define "backend" do |backend|
      backend.vm.box = "ubuntu/bionic64"
      backend.vm.network "private_network", ip: "192.168.33.12"
      backend.vm.hostname = "backend"
      backend.vm.provision "ansible" do |ansible|
        ansible.playbook = "provisioning/backend.yml"
      end
    end
  
    # Servidor de base de datos
    config.vm.define "database" do |db|
      db.vm.box = "ubuntu/bionic64"
      db.vm.network "private_network", ip: "192.168.33.13"
      db.vm.hostname = "database"
      db.vm.provision "ansible" do |ansible|
        ansible.playbook = "provisioning/database.yml"
      end
    end
  end
  