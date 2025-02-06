Vagrant.configure("2") do |config|
  
    # LOAD BALANCER
    config.vm.define "load-balancer" do |lb|
      lb.vm.box = "ubuntu/bionic64"
      lb.vm.network "private_network", ip: "192.168.56.10"
      lb.vm.hostname = "load-balancer"
      lb.vm.provision "ansible" do |ansible|
          ansible.compatibility_mode = "2.0"
          ansible.playbook = "ansible/playbooks/load_balancer.yml"      
      end
    end
  
    # FRONTEND
    config.vm.define "frontend1" do |fe1|
      fe1.vm.box = "ubuntu/bionic64"
      fe1.vm.network "private_network", ip: "192.168.56.11"
      fe1.vm.hostname = "frontend1"
      fe1.vm.provision "ansible" do |ansible|
        ansible.compatibility_mode = "2.0"
        ansible.playbook = "ansible/playbooks/frontend.yml"      
      end
    end
  
    config.vm.define "frontend2" do |fe2|
      fe2.vm.box = "ubuntu/bionic64"
      fe2.vm.network "private_network", ip: "192.168.56.12"
      fe2.vm.hostname = "frontend2"
      fe2.vm.provision "ansible" do |ansible|
        ansible.compatibility_mode = "2.0"
        ansible.playbook = "ansible/playbooks/frontend.yml"      
      end
    end

    # BACKEND
    config.vm.define "backend" do |be|
      be.vm.box = "ubuntu/bionic64"
      be.vm.network "private_network", ip: "192.168.56.13"
      be.vm.hostname = "backend"
      be.vm.provision "ansible" do |ansible|
        ansible.compatibility_mode = "2.0"
        ansible.playbook = "ansible/playbooks/backend.yml"      
      end
    end
  
    # DATABASE
    config.vm.define "database" do |db|
      db.vm.box = "ubuntu/bionic64"
      db.vm.network "private_network", ip: "192.168.56.14"
      db.vm.hostname = "database"
      db.vm.provision "ansible" do |ansible|
        ansible.compatibility_mode = "2.0"
        ansible.playbook = "ansible/playbooks/database.yml"      
    end
    end
  end
  