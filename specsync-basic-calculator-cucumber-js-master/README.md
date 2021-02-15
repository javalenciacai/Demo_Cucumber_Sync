# Basic Calculator for Demonstrating SpecSync with SpecFlow

A basic Cucumber.js calculator project to demonstrate how to synchronize SpecFlow projects with TFS (Azure DevOps) with SpecSync


Comandos

dotnet SpecSync --para ayuda

 init                    Initializes SpecSync configuration

  push                    Push changes of the scenarios on the local repository to the Azure DevOps
                          server. This by default includes linking of new scenarios to new test cases
                          (link) and updating test cases of linked scenarios (update).

  pull                    Pull changes from Azure DevOps server to the local repository. This by
                          default includes creation of new scenarios from unlinked test cases
                          (create) and changing scenarios of linked test cases (change).

  publish-test-results    Publish local test results to Azure DevOps server.

  help                    Display more information on a specific command.

  version                 Display version information.