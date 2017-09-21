<#########################################################################################################################################>

<#
.Notes
AUTHOR:   Arnaud Petitjean
VERSION:  1.0
CREATED:  11/26/2012
LASTEDIT:

.Synopsis
Copie un r�pertoire ainsi que ses objets enfants d'un emplacement � un autre en affichant une barre de progression.

.Description
La copie des objets s'effectue de fa�on r�cursive. Si le r�pertoire de destination n'existe pas, il sera cr�� automatiquement.

.Parameter Source
Sp�cifie le chemin d'acc�s de l'objet � copier. Il s'agit g�n�ralement d'un r�pertoire.

.Parameter Destination
Sp�cifie le chemin d'acc�s de l'emplacement o� les �l�ments doivent �tre copi�s.

.Example
PS > Copy-ItemWithProgressBar -Source C:\temp\monDossier -Destination D:\

Copie le r�pertoire C:\temp\monDossier ainsi que son contenu vers D:\ en affichant une barre de progression.

	.Example
PS > Copy-ItemWithProgressBar -Source .\monDossier -Destination D:\temp

Copie le r�pertoire "monDossier" � partir du chemin courant ainsi que son contenu vers D:\temp en affichant une barre de progression.
#>

<#########################################################################################################################################>

 function Copy-ItemWithProgressBar {

	[cmdletBinding()]

	Param (
	
	[parameter(Mandatory=$true, ValueFromPipeline=$true)]
		$Source,
		[parameter(Mandatory=$true, ValueFromPipeline=$false)]
		$Destination

	)

	begin {

		$numberofitems = @(Get-ChildItem $Source).count
		$cpt = 0
		$Source = Get-Item -Path $Source

	}

	process {

		if ($Source.PSIsContainer) {

			foreach ($item in (Get-ChildItem $Source)) {

				if (!(Test-Path $Destination)) {

					New-Item -Path $Destination -ItemType Directory | Out-Null

				}

				if ($item.PSIsContainer) {

					Copy-ItemWithProgressBar -Source $item.FullName `
					-Destination (Join-Path $Destination $item.Name)

				} else {

					$cpt++
					Copy-Item -Path $item.Fullname -Destination $Destination
					Write-Progress -Id 1 `                                    -Activity ("Copie du r�pertoire {0}" -f $Source) `
					-PercentComplete ($cpt / $numberofitems * 100) `
					-Status ("Copie du fichier {0} - {1} sur {2}" -f $item.Name, $cpt, $numberofitems)

				}
			}
		} 
	}
}